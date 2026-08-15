// Local mock API — serves data from solutionsData.js without a backend

import { SOLUTIONS_DATA } from "@/data/solutionsData";

const delay = (ms = 100) =>
  new Promise((res) => setTimeout(res, ms));


// =====================================================
// SIMULATE AXIOS RESPONSE
// =====================================================

function ok(data) {
  return { data };
}


// =====================================================
// API
// =====================================================

export const api = {

  // ===================================================
  // GET
  // ===================================================

  get: async (path) => {

    await delay(80);

    if (
      path === "/products" ||
      path.startsWith("/products")
    ) {

      if (path === "/products") {
        return ok(SOLUTIONS_DATA);
      }

      const slug = path.split("/").pop();

      const item = SOLUTIONS_DATA.find(
        (p) => p.slug === slug
      );

      if (!item) {

        throw {
          response: {
            status: 404,
            data: {
              detail: "Not found",
            },
          },
        };

      }

      return ok(item);
    }


    throw {
      response: {
        status: 404,
        data: {
          detail: "Unknown endpoint",
        },
      },
    };

  },


  // ===================================================
  // POST
  // ===================================================

  post: async (path, body) => {

    await delay(120);


    if (path === "/inquiries") {

      // -----------------------------------------------
      // GET EXISTING INQUIRIES
      // -----------------------------------------------

      const inquiries = JSON.parse(
        localStorage.getItem("veridian_inquiries") || "[]"
      );


      // -----------------------------------------------
      // CREATE NEW INQUIRY
      // -----------------------------------------------

      const entry = {

        id: Date.now(),

        timestamp:
          new Date().toLocaleString(),

        fullName:
          body.name,

        email:
          body.email,

        organization:
          body.company,

        phone:
          body.phone,

        // Product
        product:
          body.interest || "General enquiry",

        // Service
        service:
          body.service || "General enquiry",

        message:
          body.message,

      };


      // -----------------------------------------------
      // SAVE TO LOCAL STORAGE
      // -----------------------------------------------

      inquiries.push(entry);

      localStorage.setItem(
        "veridian_inquiries",
        JSON.stringify(inquiries)
      );


      // -----------------------------------------------
      // SEND EMAIL THROUGH FORMSUBMIT
      // -----------------------------------------------

      try {

        await fetch(
          "https://formsubmit.co/ajax/info@biomindz.in",
          {

            method: "POST",

            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },

            body: JSON.stringify({

              _subject:
                "New Inquiry from BioMindz Website",

              _captcha:
                "false",

              _template:
                "table",

              _autoresponse:
                "Thank you for contacting BIO MINDZ Solutions Pvt. Ltd. We have received your query and will reply shortly.",


              // ---------------------------------------
              // CUSTOMER DETAILS
              // ---------------------------------------

              name:
                body.name,

              email:
                body.email,

              phone:
                body.phone,

              company:
                body.company,


              // ---------------------------------------
              // PRODUCT
              // ---------------------------------------

              product:
                body.interest || "General enquiry",


              // ---------------------------------------
              // SERVICE
              // ---------------------------------------

              service:
                body.service || "General enquiry",


              // ---------------------------------------
              // MESSAGE
              // ---------------------------------------

              message:
                body.message,

            }),

          }
        );

      } catch (e) {

        console.error(
          "Email delivery via FormSubmit failed:",
          e
        );

      }


      return ok(entry);

    }


    throw {
      response: {
        status: 404,
        data: {
          detail: "Unknown endpoint",
        },
      },
    };

  },

};


// =====================================================
// FORMAT API ERROR
// =====================================================

export function formatApiErrorDetail(detail) {

  if (!detail) {
    return "";
  }

  if (typeof detail === "string") {
    return detail;
  }

  if (Array.isArray(detail)) {

    return detail
      .map((d) => d.msg || d)
      .join(", ");

  }

  return String(detail);

}