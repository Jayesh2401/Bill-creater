import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Form() {
  // var a = [
  //   "",
  //   "one ",
  //   "two ",
  //   "three ",
  //   "four ",
  //   "five ",
  //   "six ",
  //   "seven ",
  //   "eight ",
  //   "nine ",
  //   "ten ",
  //   "eleven ",
  //   "twelve ",
  //   "thirteen ",
  //   "fourteen ",
  //   "fifteen ",
  //   "sixteen ",
  //   "seventeen ",
  //   "eighteen ",
  //   "nineteen ",
  // ];
  // var b = [
  //   "",
  //   "",
  //   "twenty",
  //   "thirty",
  //   "forty",
  //   "fifty",
  //   "sixty",
  //   "seventy",
  //   "eighty",
  //   "ninety",
  // ];

  const [Invoice, setInvoice] = useState("");
  const [InvoiceDate, setInvoiceDate] = useState("");
  const [challan, setchallan] = useState("");
  const [state, setstate] = useState("");
  const [Transport, setTransport] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [Supply, setSupply] = useState("");
  const [PartyName, setPartyName] = useState("");
  const [Addresse, setAddresse] = useState("");
  const [GstIn, setGstIn] = useState("");
  const [Agent, setAgent] = useState("");
  const [Lr, setLr] = useState("");
  const [haste, setHaste] = useState("");
  const [Codde, setCodde] = useState("");
  const [Description, setDescription] = useState("");
  const [Qty, setQty] = useState("");
  const [amount, setamount] = useState("");
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(0);
  const [allData, setAllData] = useState([]);

  const [gAmount, setgAmount] = useState(0);
  const [gQty, setgQty] = useState(0);
  const [aTotal, setaTotal] = useState(0);
  const [gsttax, setGsttax] = useState(0);
  const disc = +Qty * +amount;
  const Navigate = useNavigate();
  // const data = {
  //     Invoice : Invoice,
  //     InvoiceDate : InvoiceDate,
  // };

  useEffect(() => {
    const data = {
      Invoice,
      InvoiceDate,
      challan,
      Transport,
      state,
      from,
      to,
      Supply,
      PartyName,
      Addresse,
      GstIn,
      Agent,
      Lr,
      haste,
      Codde,
      allData,
      aTotal,
      gQty,
      gAmount,
      gsttax,
    };
    console.log("sd", data);
    // setdetails(data);

    localStorage.setItem("data", JSON.stringify(data));
    // console.log(d,"data");
  }, [
    Invoice,
    InvoiceDate,
    challan,
    Transport,
    state,
    from,
    to,
    Supply,
    PartyName,
    Addresse,
    GstIn,
    Agent,
    Lr,
    haste,
    Codde,
    allData,
    aTotal,
    gQty,
    gAmount,
    gsttax,
  ]);

  useEffect(() => {
    setTotal(discount === "" ? disc : (disc * (100 - +discount)) / 100);
  }, [disc, discount]);

  const handleClick = (e) => {
    e.preventDefault();

    // setTotal(
    //   discount === "" ? +Qty * +amount : (+Qty * +amount * +discount) / 100
    // );
    setAllData((prev) => [
      ...prev,
      {
        // no,
        Description,
        Qty,
        amount,
        discount,
        total,
        hsn: 5208,
      },
    ]);
    setaTotal((prev) => prev + +total);
    setgQty((prev) => prev + +Qty);
    setgAmount((prev) => prev + +amount);

    //  setno("");
    setDescription("");
    setQty(0);
    setamount(0);
    setDiscount(0);
    // setTotal(0);
    // setAllData();

    // setGsttax((prev)=> )
    // gg();
  };

  // function inWords(num) {
  //   if ((num = num.toString()).length > 9) return "overflow";
  //   const n = ("000000000" + num)
  //     .substr(-9)
  //     .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  //   if (!n) return;
  //   var str = "";
  //   str +=
  //     n[1] !== 0
  //       ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
  //       : "";
  //   str +=
  //     n[2] !== 0
  //       ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
  //       : "";
  //   str +=
  //     n[3] !== 0
  //       ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
  //       : "";
  //   str +=
  //     n[4] !== 0
  //       ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
  //       : "";
  //   str +=
  //     n[5] !== 0
  //       ? (str !== "" ? "and " : "") +
  //         (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
  //         "only "
  //       : "";
  //   return str;
  // }

  // inWords();

  // document.getElementById('number').onkeyup = function () {
  //     document.getElementById('words').innerHTML = inWords(document.getElementById('number').value);
  // };

  // const gg = () => {
  //   setno("");
  //   setDescription("");
  //   setQty("");
  //   setamount("");
  //   setDiscount("");
  //   setTotal("");
  //   setAllData("");
  // };
  // console.log(allData.length, "data");

  const submitHandler = () => {
    var percent = (5 / 100) * aTotal;
    setGsttax(percent);
    if (allData.length !== 8) {
      for (let i = allData.length; i <= 7; i++) {
        setAllData((prev) => [
          ...prev,
          {
            // no: i + 1,
            Description: "",
            Qty: "",
            amount: "",
            discount: "",
            total: "",
            hsn: "",
          },
        ]);
      }
    }
  };

  const navgiate = () => {
    Navigate("/pdf");
  };
  // console.log(allData);
  // console.log(Invoice,"invoice")
  return (
    //     <div className='ddd'>
    //     <form >
    //     <div className="row ddd">
    //     <div className='col-md-6'>

    //         <input
    //             className="form-control ddd"
    //         />
    //     </div>
    //     <div className='col-md-6'>

    // <input
    //     className="form-control ddd"
    // />
    // </div>
    //     </div>

    //     </form>
    //     </div>

    <div>
      <form className="row g-3 form-wrapper">
        <div className="col-md-3 form-col">
          <label className="form-label">Invoice No :</label>
          <input
            className="form-control"
            onChange={(e) => setInvoice(e.target.value)}
          />
        </div>
        <div className="col-md-3 ">
          <label className="form-label">Invoice Date :</label>
          <input
            type="date"
            className="form-control"
            onChange={(e) => setInvoiceDate(e.target.value)}
          />
        </div>
        <div className="col-md-3 ">
          <label className="form-label">Challan No:</label>
          <input
            className="form-control"
            onChange={(e) => setchallan(e.target.value)}
          />
        </div>
        <div className="col-md-3 ">
          <label className="form-label">State :</label>
          <input
            className="form-control"
            onChange={(e) => setstate(e.target.value)}
          />
        </div>
        <div className="col-md-3 ">
          <label className="form-label">Transport :</label>
          <input
            className="form-control"
            onChange={(e) => setTransport(e.target.value)}
          />
        </div>
        <div className="col-md-3 ">
          <label className="form-label">From :</label>
          <input
            className="form-control"
            onChange={(e) => setfrom(e.target.value)}
          />
        </div>
        <div className="col-md-3 ">
          <label className="form-label">to :</label>
          <input
            className="form-control"
            onChange={(e) => setto(e.target.value)}
          />
        </div>
        <div className="col-md-3 ">
          <label className="form-label">Place of Supply :</label>
          <input
            className="form-control"
            onChange={(e) => setSupply(e.target.value)}
          />
        </div>
        <div className="col-md-3 ">
          <label className="form-label">Name Of Party :</label>
          <input
            className="form-control"
            onChange={(e) => setPartyName(e.target.value)}
          />
        </div>
        <div className="col-md-6 ">
          <label className="form-label">Address :</label>
          <input
            className="form-control"
            onChange={(e) => setAddresse(e.target.value)}
          />
        </div>
        <div className="col-md-3 ">
          <label className="form-label">GSTIN :</label>
          <input
            className="form-control"
            onChange={(e) => setGstIn(e.target.value)}
          />
        </div>
        <div className="col-md-3 ">
          <label className="form-label">Agent :</label>
          <input
            className="form-control"
            onChange={(e) => setAgent(e.target.value)}
          />
        </div>{" "}
        <div className="col-md-3 ">
          <label className="form-label">Lr No :</label>
          <input
            className="form-control"
            onChange={(e) => setLr(e.target.value)}
          />
        </div>{" "}
        <div className="col-md-3 ">
          <label className="form-label">Haste :</label>
          <input
            className="form-control"
            onChange={(e) => setHaste(e.target.value)}
          />
        </div>{" "}
        <div className="col-md-3 ">
          <label className="form-label">Code :</label>
          <input
            className="form-control"
            onChange={(e) => setCodde(e.target.value)}
          />

          {/* inputs */}
        </div>
        <label className="col-md-12 text-align-center"> Bill Details</label>
        {/* ***************************** */}
        {/* <div className=" col-sm-1 col-md-1  ">
          <label className="form-label">No :</label>
          <input
            className="form-control"
            // value={no}
            // onChange={(e) => setno(e.target.value)}
          />
        </div> */}
        <div className="col-sm-11 col-md-3">
          <label className="form-label">Desc :</label>
          <input
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-md-1 ">
          <label className="form-label">QTY :</label>
          <input
            className="form-control"
            value={Qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </div>
        <div className="col-md-1 ">
          <label className="form-label">Amount :</label>
          <input
            className="form-control"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
          />
        </div>
        <div className="col-md-1 ">
          <label className="form-label">Discount :</label>
          <input
            className="form-control"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div className="col-md-1 ">
          <label className="form-label">Total :</label>
          <input
            className="form-control"
            placeholder={total}
            // onChange={(e) => setTotal(amount)}
          />
        </div>
        <div className="col-md-1 mt-5">
          {allData.length < 8 && (
            <button
              className=" btn btn-primary"
              onClick={(e) => handleClick(e)}
            >
              +
            </button>
          )}

          {/* <span id="words"></span>
<input id="number" type="text" /> */}
        </div>
        {/* <div className="col-md-6 ">
     <label  className="form-label">
        Invoice No :
     </label>
     <input
     className="form-control"
           onChange={(e)=> setInvoice(e.target.value)} 
        />
     </div> */}
      </form>

      {/* <div className="row">
    //     <label>Invoice No:</label>
    //     <input
    //        onChange={(e)=> setInvoice(e.target.value)} 
    //     />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    //     <div>Invoice Date:</div>
    //     <input
    //     type="date"
    //        onChange={(e)=> setInvoiceDate(e.target.value)} 
    //     />

    // </div>&nbsp;
    // <div > */}
      <button
        onClick={() => {
          submitHandler();
        }}
      >
        Save
      </button>

      <button onClick={() => navgiate()}>View</button>
      {/* // </div> */}
      {allData.map((data, i) => {
        const index = i;
        return (
          <ul key={index}>
            <li>
              {data.no} --{data.Description}-- {data.Qty}--
              {data.amount}--
              {data.discount}--
              {data.total}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Form;
