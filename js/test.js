var Contact = document.getElementById("contact");
Contact.onsubmit = (event) => {
  event.preventDefault();
  Swal.fire({
    icon: "success",
    title: "Cảm ơn những góp ý chân thành của các bạn",
    text: "Chúng tôi sẽ trả lời trong thời gian sớm nhất",
    // footer: '<a href="">Why do I have this issue?</a>',
  });
};