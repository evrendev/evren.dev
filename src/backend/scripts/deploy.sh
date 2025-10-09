#!/bin/bash

# Automatic deployment script for backend
# This script builds the .NET application and uploads it via FTP

echo "🚀 Backend deployment başlıyor..."

# load .env.deploy if exists
if [ -f .env.deploy ]; then
    export $(cat .env.deploy | grep -v '^#' | xargs)
fi

# Go to the script directory
cd "$(dirname "$0")/.."

echo "📦 Bağımlılıklar geri yükleniyor..."
dotnet restore

echo "🔨 Proje derleniyor..."
dotnet build -c Release

echo "📦 Proje publish ediliyor..."
dotnet publish -c Release -o publish

echo "📁 FTP ile yükleme başlıyor..."

# Get FTP details from environment variables or use defaults
FTP_HOST=${FTP_HOST_API:-"api.evren.dev"}
FTP_USER=${FTP_USER_API}
FTP_PASSWORD=${FTP_PASSWORD_API}
FTP_REMOTE_DIR=${FTP_REMOTE_DIR_API:-"/httpdocs/"}

if [ -z "$FTP_USER" ] || [ -z "$FTP_PASSWORD" ]; then
    echo "❌ FTP bilgileri eksik. .env.deploy dosyasını kontrol edin."
    echo "Gerekli değişkenler: FTP_USER_API, FTP_PASSWORD_API"
    exit 1
fi

# Upload using lftp
lftp -c "
set ftp:list-options -a;
open ftp://$FTP_USER:$FTP_PASSWORD@$FTP_HOST;
lcd publish;
cd $FTP_REMOTE_DIR;
mirror --reverse --delete --verbose --exclude-glob .git/ --exclude-glob .vs/
"

if [ $? -eq 0 ]; then
    echo "✅ Backend başarıyla yüklendi!"
else
    echo "❌ Yükleme hatası!"
    exit 1
fi