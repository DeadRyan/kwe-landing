
import MessageSquareImg from './../images/message-square.svg';
import UsersImg from './../images/users.svg';
import BriefcaseImg from './../images/briefcase.svg';
import './../styles/contact.scss';
export const Contact = () => {
  return(
    <>
      <div class="section-4 wf-section">
        <div class="w-container">
            <div class="title">
              <h1 class="heading-8">Get in touch</h1>
              <h3><span class="text-span-4">We’re always ready to help</span></h3>
            </div>
            <div className='buttons'>
              <a href="mailto:inquiries@kryptowealthgroup.com" className='mail-btn'>
                <img src={MessageSquareImg} loading="lazy" alt="" class=""/>
                <span className='mail-label'>Inquiries</span>
              </a>
              <a href="mailto:partnershipinquiries@kryptowealthgroup.com" className='mail-btn'>
                <img src={UsersImg} loading="lazy" alt="" class=""/>
                <span className='mail-label'>Partnerships</span>
              </a>
              <a href="mailto:careers@kryptowealthgroup.com" className='mail-btn'>
                <img src={BriefcaseImg} loading="lazy" alt="" class=""/>
                <div className='mail-label'>Careers</div>
              </a>

            </div>
        </div>
      </div>
      {/* <div class="column-7 w-col w-col-4">
        <img src={MessageSquareImg} loading="lazy" alt="" class="image-61"/>
        <img src={UsersImg} loading="lazy" alt="" class="image-62"/>
        <img src={BriefcaseImg} loading="lazy" alt="" class="image-63"/>
      </div>
      <div class="w-col w-col-8">
        <div class="text-block-48">Inquiries<br/>Partnerships<br/>Careers</div>
      </div> */}
    </>
  );
}
export default Contact;
