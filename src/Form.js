import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Form() {
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

    localStorage.setItem("data", JSON.stringify(data));
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

    setAllData((prev) => [
      ...prev,
      {
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

    setDescription("");
    setQty(0);
    setamount(0);
    setDiscount(0);
  };

  const submitHandler = () => {
    var percent = (5 / 100) * aTotal;
    setGsttax(percent);
    if (allData.length !== 8) {
      for (let i = allData.length; i <= 7; i++) {
        setAllData((prev) => [
          ...prev,
          {
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

  return (
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
            onChange={(e) =>
              setInvoiceDate(
                `${e.target.value.slice(8, 11)} - ${e.target.value.slice(
                  5,
                  7
                )} - ${e.target.value.slice(0, 4)}`
              )
            }
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
        </div>
        <label className="col-md-12 text-align-center"> Bill Details</label>
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
          <input className="form-control" placeholder={total} />
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
        </div>
      </form>

      <button
        onClick={() => {
          submitHandler();
        }}
      >
        Save
      </button>

      <button onClick={() => navgiate()}>View</button>
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
