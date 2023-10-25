import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import QRCode from "react-qr-code";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import PrimaryBtn from "./PrimaryBtn";

const TicketTemplatePdf = () => {
  const ticket = useRef(null);

  const data = {
    name: "Rashmi Ranjan Nayak",
    orderNo: "bxsxsx15155",
    id: "GOOGLEjcs2021",
  };

  const exportAsImageAndPDF = async (el, name) => {
    // Convert HTML to PNG
    const dataUrl = await htmlToImage.toPng(el);

    // Create a link element for downloading the PNG
    const imgLink = document.createElement("a");
    imgLink.download = `${name}.png`;
    imgLink.href = dataUrl;

    // Convert PNG to PDF
    const pdf = new jsPDF({ orientation: "landscape" });

    const pdfWidth = pdf.internal.pageSize.width;
    const pdfHeight = pdf.internal.pageSize.height;
    const imgWidth = pdfWidth;
    const imgHeight = pdfHeight * 0.55;

    pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);

    await toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000); // Adjust the duration as needed
      }),
      {
        loading: "Downloading...",
        success: "Download successful!",
        error: "An error occurred during Download.",
      }
    );
    pdf.save(`${name}.pdf`);
  };

  return (
    <>
      <div style={{ minHeight: "300px" }}></div>
      <div
        id="tickettemplateMain"
        style={{
          width: "100%",
          height: "100%",
          gap: "1rem",
          overflowX: "scroll",
        }}
      >
        <div
          id="ticket"
          style={{
            width: "950px",
            height: "350px",
            padding: ".5rem .5rem 0",
          }}
          ref={ticket}
        >
          <div
            id="ticket-container"
            style={{
              backgroundImage: "url(/assets/ticketTemplate.png)",
              width: "950px",
              height: "350px",
              // backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <div
              id="content "
              style={{
                position: "relative",
              }}
            >
              <div
                id="text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  color: "#fff",
                  position: "absolute",
                  top: "3rem",
                  left: "19%",
                  paddingLeft: "3rem",
                }}
              >
                <div
                  className="name"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".2rem",
                  }}
                >
                  <span style={{ fontSize: "0.8rem", color: "#bdbdbd" }}>
                    Name
                  </span>
                  <h3 style={{ marginBlock: 0, fontSize: "1rem" }}>
                    {data.name}
                    {/* change name */}
                  </h3>
                </div>
                <div
                  className="order"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".2rem",
                  }}
                >
                  <span style={{ fontSize: "0.8rem", color: "#bdbdbd" }}>
                    Order No:
                  </span>
                  <h3 style={{ marginBlock: 0, fontSize: "1rem" }}>
                    {data.orderNo}
                    {/* change name */}
                  </h3>
                </div>
              </div>
              <div
                className="box"
                style={{
                  width: "150px",
                  aspectRatio: 1,
                  backgroundColor: "#fff",
                  position: "absolute",
                  top: "1.9rem",
                  left: "6%",
                  borderRadius: ".5rem",
                  display: "grid",
                  placeContent: "center",
                  padding: "1rem",
                }}
              >
                <QRCode
                  value={data.id}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  viewBox={`0 0 256 256`}
                  bgColor={"#fff"}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginInline: "auto",
          }}
        >
          <PrimaryBtn
            text={"Download Ticket"}
            onClick={() =>
              exportAsImageAndPDF(
                ticket.current,
                `${data.name}.${data.orderNo}-ticket`
              )
            }
          />
        </div>
      </div>
    </>
  );
};

export default TicketTemplatePdf;
