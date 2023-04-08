import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// function ContactForm() {
// 	return (

// <div class="wrapper">
// 			<div class="inner">
// 				<form action="#">
// 					<h3>Contact Us</h3>
// 					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
// 					<label class="form-group" />
// 						<input type="text" class="form-control"  required />
// 						<span>Your Name</span>
// 						<span class="border"></span>
					
// 					<label class="form-group" />
// 						<input type="text" class="form-control"  required />
// 						<span for="">Your Mail</span>
// 						<span class="border"></span>
					
// 					<label class="form-group"  />
// 						<textarea name="" id="" class="form-control" required />
// 						<span for="">Your Message</span>
// 						<span class="border"></span>
					
// 					<button>Submit 
// 						<i class="zmdi zmdi-arrow-right"></i>
// 					</button>
// 				</form>
// 			</div>
// 		</div>

// )
// }
	
	// export default ContactForm;

function ContactForm() {
	return (

<Container fluid="md" className='form-wrapper'style={{width: '500px'}}>
<Row className="justify-content-md-center">
<div class="form-wrapper">

<section class="mb-4">

   
    <h2 class="h1-responsive font-weight-bold text-center my-4 section-title">Contact Me</h2>
  
    {/* <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p> */}

    <div class="row">

        
        <div class="col-md-12 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form">

               
                <div class="row">

                   
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" />
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                   

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" />
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                  

                </div>
                

                
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" />
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
               

               
                <div class="row">

                    
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                

            </form>

            <div class="text-center text-md-left">
            <input type="submit" value="Send"></input>
            <a class="btn btn-primary" onclick="validateForm();">Send</a>            </div>
            <div class="status"></div>
        </div>
      
        {/* <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div> 
         */}

    </div>

</section>

		</div>
		</Row>
		</Container>

)
}
	
	export default ContactForm;