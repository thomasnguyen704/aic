<template>
  <div>
    <b-jumbotron>
      <b-container>
        <b-row>
          <b-col lg="4">
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
            <p>
              <b-button class="mx-1">Button 1</b-button>
              <a href="https://accidentandinjurycharlotte.com/" target="_blank" class="btn btn-primary mx-1"
                role="button">Old Site</a>
            </p>
          </b-col>
          <b-col lg="8">
            <b-embed type="iframe" aspect="16by9"
              src="https://www.youtube.com/embed/Aa9TvW9S_tI?playlist=Aa9TvW9S_tI&loop=1&autoplay=1&mute=1"
              allowfullscreen />
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>

    <article class="bg-warning py-5">
      <b-container>
        <b-row>
          <b-col lg="4" class="px-4">
            <p class="lead">CAR ACCIDENT <br /> INJURY TREATMENT</p>
            <p>As medical doctors, we know that even a minor soft tissue injury is enough to knock you off your feet.
              And following a car accident, many people struggle to get back to their full range of motion. This is why
              our Chiropractic Doctors are dedicated to helping Car Accident Injury victims with their recovery–and have
              been doing so for over 40 years.</p>
          </b-col>
          <b-col lg="4" class="px-4">
            <p class="lead">CORRECTIVE EXERCISES <br /> AND TREATMENT OPTIONS</p>
            <p>At our Accident and Injury Center, we believe in the importance of corrective exercises to help each
              patient strengthen and correct irregularities in their bodies that may be causing them pain. We believe
              that teaching our patients the proper corrective exercises catered specifically to their needs is
              imperative to a full recovery–even after the treatment is over.</p>
          </b-col>
          <b-col lg="4" class="px-4g">
            <p class="lead">CHIROPRACTIC <br /> ADJUSTMENTS</p>
            <p>Our Chiropractors are experts at providing neck and back pain relief care. We utilize the most advanced
              chiropractic techniques and treatment methods in the industry. Treatments include electric muscle
              stimulation therapy, spinal manipulation & decompression, hot/cold therapies and so much more.</p>
          </b-col>
        </b-row>
      </b-container>
    </article>
    
    <div class="last"></div>

  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home'
  }
</script>

<style scoped>
  .jumbotron {
    margin: 0px;
    min-height: 90vh;
  }
  article {
    min-height: 80vh;
  }
</style>