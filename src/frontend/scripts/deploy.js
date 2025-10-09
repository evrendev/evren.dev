#!/usr/bin/env node

import FtpDeploy from "ftp-deploy"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"
import process from "process"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function loadEnv() {
  const envPath = path.join(__dirname, "..", ".env.deploy")
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf8")
    const envVars = {}
    envContent.split("\n").forEach(line => {
      const [key, value] = line.split("=")
      if (key && value) {
        envVars[key.trim()] = value.trim()
      }
    })
    return envVars
  }
  return {}
}

const env = loadEnv()

const ftpDeploy = new FtpDeploy()

const config = {
  user: env.FTP_USER || process.env.FTP_USER,
  password: env.FTP_PASSWORD || process.env.FTP_PASSWORD,
  host: env.FTP_HOST || process.env.FTP_HOST || "evren.dev",
  port: env.FTP_PORT || process.env.FTP_PORT || 21,
  localRoot: path.join(__dirname, "..", "dist"),
  remoteRoot:
    env.FTP_REMOTE_ROOT || process.env.FTP_REMOTE_ROOT || "/httpdocs/",
  include: ["*", "**/*"],
  exclude: [
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    ".git/**",
  ],
  deleteRemote: false,
  forcePasv: true,
  sftp: false,
}

console.log("🚀 Frontend deployment başlıyor...")
console.log(`📁 Yerel dizin: ${config.localRoot}`)
console.log(`🌐 Uzak sunucu: ${config.host}${config.remoteRoot}`)

ftpDeploy
  .deploy(config)
  .then(res => {
    console.log("✅ Frontend başarıyla yüklendi!")
    console.log(`📊 ${res.length} dosya yüklendi`)
  })
  .catch(err => {
    console.error("❌ Yükleme hatası:", err)
    process.exit(1)
  })

ftpDeploy.on("uploading", function (data) {
  console.log(`⬆️  Yükleniyor: ${data.filename}`)
})

ftpDeploy.on("uploaded", function (data) {
  console.log(`✅ Yüklendi: ${data.filename}`)
})

ftpDeploy.on("log", function (data) {
  console.log(`📝 ${data}`)
})
