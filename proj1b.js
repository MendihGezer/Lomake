function ValidateForm(frm) {
if (frm.First_Name.value == "") { alert('Anna etunimesi.'); frm.First_Name.focus(); return false; }
if (frm.Last_Name.value == "") { alert('Anna sukunimesi.'); frm.Last_Name.focus(); return false; }
if (frm.Email_Address.value == "") { alert('Email address is required.'); frm.Email_Address.focus(); return false; }
if (frm.Email_Address.value.indexOf("@") < 1 || frm.Email_Address.value.indexOf(".") < 1) { alert('Please enter a valid email address.'); frm.Email_Address.focus(); return false; }
if (frm.Position.value == "") { alert('Position is required.'); frm.Position.focus(); return false; }
if (frm.Phone.value == "") { alert('Anna puhelinnumero.'); frm.Phone.focus(); return false; }
return true; }
