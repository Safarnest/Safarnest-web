import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import OtpVerification from "../security/OtpVerification";
import CaptchaBox from "../security/CaptchaBox";

function BookingForm({ packageData }) {
  const navigate = useNavigate();
  const [formData,setFormData]=useState({name:"",phone:"",date:"",adults:2,children:0,message:""});
  const [mobileVerified,setMobileVerified]=useState(false);
  const [captchaVerified,setCaptchaVerified]=useState(false);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    if(name==="phone") setMobileVerified(false);
    setFormData({...formData,[name]:value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!mobileVerified) return alert("Please verify your mobile number.");
    if(!captchaVerified) return alert("Please complete CAPTCHA.");
    alert("Enquiry submitted successfully.");
  };

  const handlePlanTrip=()=>navigate(`/enquiry?packageId=${packageData.id}`);

  const handleWhatsApp=()=>{
    const text=`*New Package Enquiry*\n\n📦 Package: ${packageData.title}\n👤 ${formData.name}\n📞 ${formData.phone}`;
    window.open(`https://wa.me/919354556973?text=${encodeURIComponent(text)}`,"_blank");
  };

  return (
    <div id="booking" className="bg-white rounded-3xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-blue-900">Book This Package</h2>
      <form onSubmit={handleSubmit} className="space-y-5 mt-8">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full border rounded-xl px-4 py-3"/>
        <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} className="w-full border rounded-xl px-4 py-3"/>
        <OtpVerification phone={formData.phone} verified={mobileVerified} setVerified={setMobileVerified}/>
        <CaptchaBox verified={captchaVerified} setVerified={setCaptchaVerified}/>
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border rounded-xl px-4 py-3"/>
        <div className="grid grid-cols-2 gap-4">
          <input type="number" name="adults" min="1" value={formData.adults} onChange={handleChange} className="border rounded-xl px-4 py-3"/>
          <input type="number" name="children" min="0" value={formData.children} onChange={handleChange} className="border rounded-xl px-4 py-3"/>
        </div>
        <textarea rows="4" name="message" placeholder="Special Request" value={formData.message} onChange={handleChange} className="w-full border rounded-xl px-4 py-3"/>
        <button type="submit" className="w-full bg-yellow-400 py-4 rounded-xl font-bold">Get Best Quote</button>
        <button type="button" onClick={handlePlanTrip} className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold">Plan My Trip</button>
        <button type="button" onClick={handleWhatsApp} className="w-full bg-green-500 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-3"><FaWhatsapp size={22}/>Enquire on WhatsApp</button>
      </form>
    </div>
  );
}
export default BookingForm;
