import { useState, useEffect } from "react";
import "./App.css";

function Try() {
  const [datas, setdatas] = useState({});

  const clickss = () => {
    window.print();
  };

  useEffect(() => {
    setdatas(JSON.parse(localStorage.getItem("data")));
  }, []);

  useEffect(() => {
    const a = [
      "",
      "one ",
      "two ",
      "three ",
      "four ",
      "five ",
      "six ",
      "seven ",
      "eight ",
      "nine ",
      "ten ",
      "eleven ",
      "twelve ",
      "thirteen ",
      "fourteen ",
      "fifteen ",
      "sixteen ",
      "seventeen ",
      "eighteen ",
      "nineteen ",
    ];
    const b = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    const num = isNaN(document.getElementById("number").innerHTML)
      ? 0
      : document.getElementById("number").innerHTML;
    let str = "";

    if (num.toString().length > 9) {
      str = "overflow";
    }
    const n = ("000000000" + +num)
      .substr(-9)
      .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    str +=
      n[1] !== 0 && n > 9999999
        ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
        : "";
    str +=
      n[2] !== 0 && n > 99999
        ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
        : "";
    str +=
      n[3] !== 0 && n > 999
        ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
        : "";
    str +=
      n[4] !== 0 && n > 99
        ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
        : "";
    str +=
      n[5] !== 0
        ? (str !== "" ? "and " : "") +
          (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
          "only "
        : "";
    if (str === "only") {
      str = "Zero";
    }
    document.getElementById("words").innerHTML = str;
  }, []);

  const dev = datas.allData;
  var round = (
    Math.round(datas.aTotal + datas.gsttax) -
    (datas.aTotal + datas.gsttax)
  ).toFixed(2);

  return (
    <>
      <table
        className="head"
        style={{
          border: "2px solid black",
          borderCollapse: "collapse",
          width: "95%",
          margin: "5px  auto",
        }}
      >
        <thead>
          <tr>
            <td>
              <table style={{ margin: "0px  auto", width: "100%" }}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontSize: "1.4em",
                        fontStyle: "serif",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Shri Ganesh Creation{" "}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center", fontSize: "0.8em" }}>
                      B 516 5TH FLOOR, ISCON COMMERCIAL COMPLEX(VIP), OPP SUMEL
                      BUSINESS PARK-1 Ahmedabad 380002 
                     <br/> GUJARAT
                    </td>
                  </tr>

                  <tr>
                    <td style={{ textAlign: "center", fontSize: "0.8em" }}>
                      8758850927 , 9313708563
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      GSTIN : 24AAQPE9576K1Z1
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td>
              <table
                style={{
                  borderTop: "2px solid black",
                  borderBottom: "1px solid black",
                  width: "100%",
                  textAlign: "center",
                  background: "#24b4bd82",
                  position: "relative",
                  fontWeight: "bold",
                }}
              >
                <tbody>
                  <tr>
                    <td>Invoice</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td>
              <table
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        borderRight: "2px solid black",
                        width: "60%",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}> Invoice No: </span>
                      <span style={{ fontWeight: "bold" }}>
                        {datas?.Invoice || ""}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontWeight: "bold" }}> From : </span>
                      <span style={{ fontWeight: "bold" }}>
                        {datas?.from || ""}
                      </span>
                      <span style={{ fontWeight: "bold" }}>To : </span>
                      <span style={{ fontWeight: "bold" }}>
                        {datas?.to || ""}
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        borderTop: "1px solid black",
                        borderRight: "2px solid black",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        Invoice Date :{" "}
                      </span>
                      <span style={{ fontWeight: "bold" }}>
                        {datas?.InvoiceDate || ""}
                      </span>
                    </td>
                    <td style={{ borderTop: "1px solid black" }}>
                      <span style={{ fontWeight: "bold" }}>
                        Place of Supply :{" "}
                      </span>
                      <span style={{ fontWeight: "bold" }}>
                        {datas?.state || ""}
                      </span>{" "}
                      &nbsp;&nbsp;&nbsp;
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        borderTop: "1px solid black",
                        borderRight: "2px solid black",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}> Challan No : </span>
                      <span style={{ fontWeight: "bold" }}>
                        {datas?.challan || ""}
                      </span>
                    </td>
                    <td style={{ width: "40%", borderTop: "1px solid black" }}>
                      <span style={{ fontWeight: "bold" }}> Transport :</span>
                      <span style={{ fontWeight: "bold" }}>
                        {datas?.Transport || ""}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td>
              <table
                style={{
                  borderTop: "2px solid black",
                  width: "100%",
                  border: "1px solid black",
                  textAlign: "center",
                  background: "#24b4bd82",
                  position: "relative",
                  fontWeight: "bold",
                }}
              >
                <tbody>
                  <tr>
                    <td>Bill To Party</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td>
              <table
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        borderRight: "2px solid black",
                        width: "60%",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}> Name : </span>
                      <span style={{ fontWeight: "bold" }}>
                        {datas?.PartyName || ""}
                      </span>
                    </td>
                    <td
                      style={{
                        width: "40%",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}> Agent :</span>
                      <span style={{ fontWeight: "bold" }}>
                        {datas?.Agent || ""}
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        borderTop: "1px solid black",
                        borderRight: "2px solid black",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}> Address : </span>
                      <span style={{ fontWeight: "400" }}>
                        {datas?.Addresse || ""}
                      </span>
                    </td>
                    <td style={{ borderTop: "1px solid black" }}>
                      <span style={{ fontWeight: "bold" }}>Lr No : </span>
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        {datas?.Lr || ""}
                      </span>
                    </td>
                  </tr>

                  <tr style={{ height: "20px" }}>
                    <td
                      style={{
                        borderTop: "1px solid black",
                        borderRight: "2px solid black",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}> GSTIN : </span>
                      <span style={{ fontWeight: "bold" }}>
                        {datas?.GstIn || ""}
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span style={{ fontWeight: "bold" }}> Code : </span>
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        {datas?.Codde || ""}{" "}
                      </span>
                    </td>
                    <td style={{ borderTop: "1px solid black" }}>
                      <span style={{ fontWeight: "bold" }}>Haste : </span>
                      <span style={{ fontWeight: "bold" }}>
                        {datas?.haste || ""}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                style={{
                  borderTop: "1px solid black",
                  borderBottom: "0px",
                  width: "100%",
                  height: "5px",
                  position: "relative",
                }}
              ></table>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <table
                style={{
                  borderTop: "1px solid black",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        borderTop: "2px solid black",
                        fontWeight: "bold",
                        background: "#24b4bd82",
                        borderRight: "2px solid black",
                        textAlign: "center",
                        width: "5%",
                      }}
                    >
                      No
                    </td>
                    <td
                      style={{
                        borderTop: "2px solid black",
                        fontWeight: "bold",
                        textAlign: "center",
                        width: "25%",
                        background: "#24b4bd82",
                        borderRight: "2px solid black",
                      }}
                    >
                      Description
                    </td>
                    <td
                      style={{
                        borderTop: "2px solid black",
                        width: "10%",
                        textAlign: "center",
                        fontWeight: "bold",
                        background: "#24b4bd82",
                        borderRight: "2px solid black",
                      }}
                    >
                      Hsn Code
                    </td>
                    <td
                      style={{
                        borderTop: "2px solid black",
                        textAlign: "center",
                        fontWeight: "bold",
                        background: "#24b4bd82",
                        width: "10%",

                        borderRight: "2px solid black",
                      }}
                    >
                      Qty
                    </td>
                    <td
                      style={{
                        borderTop: "2px solid black",
                        textAlign: "center",
                        fontWeight: "bold",
                        width: "15%",

                        background: "#24b4bd82",
                        borderRight: "2px solid black",
                      }}
                    >
                      Amount
                    </td>
                    <td
                      style={{
                        borderTop: "2px solid black",
                        textAlign: "center",
                        fontWeight: "bold",
                        width: "15%",

                        background: "#24b4bd82",
                        borderRight: "2px solid black",
                      }}
                    >
                      Discount
                    </td>
                    <td
                      style={{
                        borderTop: "2px solid black",
                        fontWeight: "bold",
                        width: "20%",
                        textAlign: "center",
                        background: "#24b4bd82",
                        borderRight: "2px solid black",
                      }}
                    >
                      Total
                    </td>
                  </tr>

                  {dev?.map((ele, i) => {
                    const index = i;
                    return (
                      <tr key={index}>
                        <td
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            borderTop: "2px solid black",
                            borderRight: "2px solid black",
                          }}
                        >
                          {index + 1}
                        </td>
                        <td
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            borderTop: "2px solid black",
                            borderRight: "2px solid black",
                          }}
                        >
                          {ele.Description}
                        </td>
                        <td
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            borderTop: "2px solid black",
                            borderRight: "2px solid black",
                          }}
                        >
                          {ele.hsn}
                        </td>
                        <td
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            borderTop: "2px solid black",
                            borderRight: "2px solid black",
                          }}
                        >
                          {ele.Qty}
                        </td>
                        <td
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            borderTop: "2px solid black",
                            borderRight: "2px solid black",
                          }}
                        >
                          {ele.amount}
                        </td>

                        <td
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            borderTop: "2px solid black",
                            borderRight: "2px solid black",
                          }}
                        >
                          {ele.discount}
                        </td>

                        <td
                          style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            borderTop: "2px solid black",
                          }}
                        >
                          {ele.total}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        borderBottom: "2px solid black",
                        width: "38%",
                        background: "#24b4bd82",
                        borderTop: "2px solid black",
                        borderRight: "2px solid black",
                      }}
                    >
                      Total
                    </td>
                    <td
                      style={{
                        fontWeight: "bold",
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        width: "15%",
                        background: "#24b4bd82",
                        borderTop: "2px solid black",
                        borderRight: "2px solid black",
                      }}
                    >
                      {datas.gQty}
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",
                        width: "10%",
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        background: "#24b4bd82",
                        borderTop: "2px solid black",
                        borderRight: "2px solid black",
                      }}
                    >
                       {datas.gAmount}
                    </td>
                    <td
                      style={{
                        borderBottom: "2px solid black",
                        fontWeight: "bold",
                        width: "14%",
                        textAlign: "center",
                        background: "#24b4bd82",
                        borderTop: "2px solid black",
                        borderRight: "2px solid black",
                      }}
                    >
                      0
                    </td>
                    <td
                      style={{
                        borderBottom: "2px solid black",
                        fontWeight: "bold",
                        width: "19%",
                        textAlign: "center",
                        background: "#24b4bd82",
                        borderTop: "2px solid black",
                      }}
                    >
                      {datas.aTotal}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontWeight: "bold",
                        borderRight: "2px solid black",
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        width: "65%",
                        background: "#24b4bd82",
                      }}
                    >
                      Total Invoice in Words
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",
                        borderRight: "2px solid black",
                        width: "15%",
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        background: "#24b4bd82",
                      }}
                    >
                      Before Tax
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        width: "20%",
                        background: "#24b4bd82",
                      }}
                    >
                      {datas.aTotal}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontWeight: "bold",
                        borderRight: "2px solid black",
                        textAlign: "center",
                        width: "65%",
                      }}
                    ></td>

                    <td
                      style={{
                        fontWeight: "bold",
                        borderRight: "2px solid black",
                        width: "15%",
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        background: "#24b4bd82",
                      }}
                    >
                      GST Tax
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        width: "20%",
                        background: "#24b4bd82",
                      }}
                    >
                      {datas.gsttax}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontWeight: "bold",
                        borderRight: "2px solid black",
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        width: "65%",
                      }}
                    >
                      <span id="words"></span>
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",
                        borderRight: "2px solid black",
                        width: "15%",
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        background: "#24b4bd82",
                      }}
                    >
                      Round Off
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        width: "20%",
                        background: "#24b4bd82",
                      }}
                    >
                      {round}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontWeight: "bold",
                        borderRight: "2px solid black",
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        width: "45%",
                        background: "#24b4bd82",
                      }}
                    >
                      Bank Details
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",
                        borderRight: "2px solid black",
                        width: "20%",

                        textAlign: "center",
                      }}
                    ></td>
                    <td
                      style={{
                        fontWeight: "bold",

                        borderRight: "2px solid black",
                        width: "15%",
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        background: "#24b4bd82",
                      }}
                    >
                      Grand Total
                    </td>

                    <td
                      id="number"
                      style={{
                        fontWeight: "bold",

                        borderBottom: "2px solid black",
                        textAlign: "center",
                        width: "20%",
                        background: "#24b4bd82",
                      }}
                    >
                      {Math.round(datas.aTotal + datas.gsttax || 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontWeight: "bold",
                        borderRight: "2px solid black",

                        borderBottom: "2px solid black",
                        textAlign: "center",
                        fontSize: "0.8em",
                        width: "45%",
                        background: "#24b4bd82",
                      }}
                    >
                      Bank Name : HDFC BANK
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",

                        borderRight: "2px solid black",
                        width: "20%",

                        textAlign: "center",
                      }}
                    ></td>

                    <td
                      style={{
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        width: "35%",
                        fontSize: "0.7em",
                        background: "#24b4bd82",
                      }}
                    >
                      Certified that details above are correct.
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontWeight: "bold",
                        borderRight: "2px solid black",
                        fontSize: "0.8em",

                        borderBottom: "2px solid black",
                        textAlign: "center",
                        width: "45%",
                        background: "#24b4bd82",
                      }}
                    >
                      Bank A/C : 50200067135692
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",

                        borderRight: "2px solid black",
                        width: "20%",

                        textAlign: "center",
                      }}
                    ></td>

                    <td
                      style={{
                        borderBottom: "2px solid black",
                        textAlign: "center",
                        width: "35%",
                      }}
                    ></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontWeight: "bold",
                        fontSize: "0.8em",
                        borderRight: "2px solid black",

                        borderBottom: "2px solid black",
                        textAlign: "center",
                        width: "45%",
                        background: "#24b4bd82",
                      }}
                    >
                      Bank IFSC : HDFC0000971
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",

                        borderRight: "2px solid black",
                        width: "20%",

                        textAlign: "center",
                      }}
                    ></td>

                    <td
                      style={{
                        fontWeight: "bold",

                        textAlign: "center",
                        width: "35%",
                      }}
                    >
                      Shri ganesh Creation
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        borderRight: "2px solid black",

                        textAlign: "center",
                        fontSize: "0.8em",

                        width: "45%",
                      }}
                    >
                      Terms And Conditions*
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",

                        borderRight: "2px solid black",
                        width: "20%",

                        textAlign: "center",
                      }}
                    ></td>

                    <td
                      style={{
                        textAlign: "center",
                        width: "35%",
                      }}
                    ></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        borderRight: "2px solid black",

                        fontSize: "0.7em",

                        textAlign: "start",
                        width: "45%",
                      }}
                    >
                      1. Subject to Ahmedabad Jurdisdiction
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",

                        borderRight: "2px solid black",
                        width: "20%",

                        textAlign: "center",
                      }}
                    ></td>

                    <td
                      style={{
                        textAlign: "center",
                        width: "35%",
                      }}
                    ></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        borderRight: "2px solid black",
                        fontSize: "0.7em",

                        textAlign: "start",
                        width: "45%",
                      }}
                    >
                      2. Sold goods won't be taken back.
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",

                        borderRight: "2px solid black",
                        width: "20%",

                        textAlign: "center",
                      }}
                    ></td>

                    <td
                      style={{
                        textAlign: "center",
                        width: "35%",
                      }}
                    ></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        borderRight: "2px solid black",

                        textAlign: "start",
                        width: "45%",
                        fontSize: "0.7em",
                      }}
                    >
                      3.Payment Accepted by Payees A/C Cheque/Draft.
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",

                        borderRight: "2px solid black",
                        width: "20%",

                        textAlign: "center",
                      }}
                    ></td>

                    <td
                      style={{
                        textAlign: "center",
                        width: "35%",
                      }}
                    ></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        borderRight: "2px solid black",

                        textAlign: "start",
                        width: "45%",
                        fontSize: "0.7em",
                      }}
                    >
                      4. Interest will be charged @24% after due Date.
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",

                        borderRight: "2px solid black",
                        width: "20%",

                        textAlign: "center",
                      }}
                    >
                      Common Seal
                    </td>

                    <td
                      style={{
                        textAlign: "center",
                        width: "35%",
                      }}
                    ></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr
            style={{
              margin: "0 auto",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <td>
              <table
                style={{
                  margin: "0 auto",
                  borderCollapse: "collapse",
                  width: "100%",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        borderRight: "2px solid black",

                        textAlign: "start",
                        width: "45%",
                        fontSize: "0.65em",
                      }}
                    >
                      5. No complaint will be accepted once the goods are cut.
                    </td>

                    <td
                      style={{
                        fontWeight: "bold",

                        borderRight: "2px solid black",
                        width: "20%",

                        textAlign: "center",
                      }}
                    ></td>

                    <td
                      style={{
                        textAlign: "center",
                        width: "35%",
                      }}
                    ></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tfoot>
      </table>

      <button onClick={() => clickss()}>Download</button>
    </>
  );
}

export default Try;
