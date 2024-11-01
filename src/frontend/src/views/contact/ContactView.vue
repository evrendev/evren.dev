<script setup></script>

<template>
  <div class="container">
    <div class="page_contact">
      <div class="page_title">
        <h3><span>Get in Touch</span></h3>
      </div>
      <div class="infolist">
        <ul>
          <li>
            <div class="list_inner">
              <span>Address</span>
              <span>Ave Street 177, New York, USA</span>
            </div>
          </li>
          <li>
            <div class="list_inner">
              <span>Phone</span>
              <span><a class="line_effect" href="#">+44 077 155 09 09</a></span>
            </div>
          </li>
          <li>
            <div class="list_inner">
              <span>Mail</span>
              <span><a class="line_effect" href="#">tramp@example.com</a></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="form_wrapper">
        <form>
          <ul>
            <li>
              <input
                type="text"
                placeholder="Name"
                name="contact_name"
                class="cf-form-control"
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Email"
                name="contact_email"
                class="cf-form-control"
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Phone"
                name="contact_phone"
                class="cf-form-control"
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Subject"
                name="contact_subject"
                class="cf-form-control"
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="contact_message"
                class="cf-form-control"
              ></textarea>
            </li>
          </ul>
          <div class="page_button">
            <a id="send_message" class="text_effect" href="#"
              ><span class="wrapper"
                ><span class="before">Send Message</span
                ><span class="after">Send Message</span></span
              ></a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page_contact {
  width: 100%;
  padding: 100px 0px;

  .infolist {
    width: 100%;
    margin-top: 70px;

    ul {
      display: flex;
      flex-wrap: wrap;
      margin-left: -40px;

      @media (max-width: 768px) {
        flex-direction: column;
        margin-left: 0px;
      }

      li {
        width: 33.3333%;
        padding-left: 40px;
        margin-bottom: 40px;
        text-align: center;

        @media (max-width: 768px) {
          width: 100%;
          padding: 0px;
          margin-bottom: 15px;
        }

        .list_inner {
          width: 100%;
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 30px 10px;

          span {
            display: block;

            &:first-child {
              font-weight: 500;
              color: #000;
            }
          }
        }
      }
    }
  }

  .form_wrapper {
    width: 100%;
    margin-bottom: 30px;

    form {
      ul {
        display: flex;
        flex-wrap: wrap;
        margin-left: -15px;

        @media (max-width: 768px) {
          flex-direction: column;
          margin-left: 0px;
        }

        li {
          width: 50%;
          padding-left: 15px;
          margin-bottom: 15px;

          @media (max-width: 768px) {
            width: 100%;
            padding-left: 0px;
          }

          input,
          select {
            width: 100%;
            height: 50px;
            padding: 5px 20px;
            background-color: transparent;
            font-family: var(--bff);
            color: var(--bc);
            border: 1px solid rgba(0, 0, 0, 0.1);
          }

          select {
            padding-left: 15px;
          }

          input:focus,
          select:focus,
          textarea:focus,
          input:focus {
            outline: none;
          }

          input {
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            &[type="number"] {
              appearance: textfield;
              -moz-appearance: textfield;
            }
          }

          &:last-child {
            width: 100%;
            margin-bottom: 9px;

            textarea {
              padding: 20px;
              height: 120px;
              width: 100%;
              background-color: transparent;
              resize: none;
              font-family: var(--bff);
              border: 1px solid rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
    }
  }
}
</style>
