<template>
  <div class="pb-5">
    <header>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="https://www.dropbox.com/s/2o8x1kp8xsrrvoz/hero.mp4?raw=1" type="video/mp4">
      </video>
      <div class="container h-100 pb-5">
        <div class="d-flex h-100 text-center align-items-center pb-5">
          <div class="w-100 text-white py-5 fade-bg">
            <h1 class="display-4">Accident & Injury Center</h1>
            <p class="lead">Trusted Chiropractors in Charlotte for Car Accident Injuries and Chronic Pain.</p>
            <b-link class="mx-1 btn btn-lg btn-primary" to="/new" role="button">Free Consultation</b-link>
            <b-link class="mx-1 btn btn-lg btn-danger" to="/contact" role="button">Contact Us</b-link>
            <br/>
            <b-img class="cm-logo my-3" src="https://www.dropbox.com/s/z0ih4frv0q8v2vo/char-memb.jpg?raw=1" thumbnail />
          </div>
        </div>
      </div>
    </header>

    <div class="d-flex align-items-center py-5">
      <b-container>
        <b-row>
            <b-col lg="4 mb-4">
              <b-card title="Car Accident Injury Treatment" border-variant="light">
                <b-card-text>
                  As medical doctors, we know that even a minor soft tissue injury is enough to knock you off your feet. And following a car accident, many people struggle to get back to their full range of motion. This is why our Chiropractic Doctors are dedicated to helping Car Accident Injury victims with their recovery–and have been doing so for over 40 years.
                </b-card-text>
              </b-card>
            </b-col>
            <b-col lg="4 mb-4">
              <b-card title="Corrective Exercises and Treatment Options" border-variant="light">
                <b-card-text>
                  At our Accident and Injury Center, we believe in the importance of corrective exercises to help each patient strengthen and correct irregularities in their bodies that may be causing them pain. We believe that teaching our patients the proper corrective exercises catered specifically to their needs is imperative to a full recovery–even after the treatment is over.
                </b-card-text>
              </b-card>
            </b-col>
            <b-col lg="4 mb-4">
              <b-card title="Chiropractic Adjustments" border-variant="light">
                <b-card-text>
                  Our Chiropractors are experts at providing neck and back pain relief care. We utilize the most advanced chiropractic techniques and treatment methods in the industry. Treatments include electric muscle stimulation therapy, spinal manipulation & decompression, hot/cold therapies and so much more.
                </b-card-text>
              </b-card>
            </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="section text-white bg-info">
      <b-container>
        <b-row>
          <b-col lg="6" class="bg"></b-col>
          <b-col lg="6" class="py-5 pl-5">
            <h3>What Makes Us Different</h3>
            <p>The Chiropractors at our Accident and Injury Center in Charlotte have years of training and utilize the most advanced chiropractic techniques to help each patient get the pain relief they deserve from neck pain, back pain, headaches, and other accident-related injuries. We teach our accident injury patients specific exercises to help strengthen and correct any irregularities in their bodies which may be causing pain. We include lifestyle advice with our chiropractic care plans to help every patient achieve the fulfilling and happy lifestyle that they deserve.</p> 
          </b-col>
        </b-row>
      </b-container>
    </div>
    
    <div class="section text-white bg-light text-dark">
      <b-container>
        <b-row>
          <b-col lg="6" class="bg-accident text-white">
            <div class="fade-bg-dark mt-3 p-5">
              <h3>Why Is It So Important To Seek Chiropractic Care After An Auto Accident In North Carolina?</h3>
              <p>Obviously, we know you want to feel better, especially if you are experiencing any pain symptoms but there is another important reason you need quality medical care following a motor vehicle accident. Even if you are not hurting, you need to get an examination and diagnosis!</p>
            </div>
          </b-col>
          <b-col lg="6" class="py-5 pl-5">
            <h5>Never Leave Gaps in Treatment</h5>
            <p>It is crucial for an injury claim in the state of North Carolina to be documented and supported by medical records from an authoritative accident care source. Leaving gaps in your medical treatment can dramatically reduce the possiblity of starting a personal injury case. Many of our patients feel no pain for the first few days after their car accident, only for the pain to set in at a later date. The human body was not designed to handle the suddent impact and force that most automobile accidents can generate. Even a low-speed crash can cause lasting damage to your neck and back. In very stressful situations, our bodies can release adrenaline, dopamine and norepinephrine to cope with the shock and trauma that may mask the pain. If you do not get a medical exam immediately after the accident, the insurance company may argue that you injured yourself after the accident or that your injuries are not that serious because you waited to seek medical attention. As a rule, make sure to get medical care from one of our Accident Chiropractors within 14 days of your collision.</p>

            <h5>Let Our Charlotte Chiropractors Help You</h5>
            <p>Dr Kaplan or Dr. Watts will give you recommendations about any limitations you may have because of your auto accident injury. They may recommend not going to work or they may refer you to a specialist for treatment.</p>
          </b-col>
        </b-row>
      </b-container>
      <div class="last"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
  .fade-bg {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .cm-logo {
    width: 15%;
  }
  .fade-bg-dark {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .bg {
    background: url("https://www.dropbox.com/s/q3z1je9iv2p6r55/002.jpg?raw=1") center center no-repeat;
    background-size: cover;
  }
  .bg-accident {
    background: url("https://www.dropbox.com/s/o6ifw4wit23a7kt/traffic.jpg?raw=1") center center no-repeat;
    background-size: cover;
  }
  .section {
    padding: 5em 0 5em 0;
  }
  .border-light {
    border: none;
  }
  html {
    scroll-behavior: smooth;
  }
  header {
    position: relative;
    background-color: black;
    height: 100vh;
    min-height: 25rem;
    width: 100%;
    overflow: hidden;
  }
  header video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  header .container {
    position: relative;
    z-index: 2;
  }
  header .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
  }
  @media (pointer: coarse) and (hover: none) {
    header {
      background: url("https://www.dropbox.com/s/q3z1je9iv2p6r55/002.jpg?raw=1") #17a2b8 no-repeat center center scroll;
    }
    header video {
      display: none;
    }
  }
</style>