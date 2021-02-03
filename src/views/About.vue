<template>
  <div>
    <div class="bg-light py-5">
      <b-container>
        <b-row>
          <b-col xl="6" class="mb-3">
            <video playsinline="playsinline" autoplay="autoplay" controls>
              <source src="https://www.dropbox.com/s/152g4q51n0tr1he/aic.mp4?raw=1" type="video/mp4">
            </video>
          </b-col>
          <b-col xl="6">
            <h5>Who We Are</h5>
            <p>We are a team of Chiropractic Care experts with more than 40 years of experience treating accident injury victims in the Charlotte area. Our team includes a combination of Chiropractic Doctors and Assistants who use their extensive training to relieve the pain our clients are experiencing.</p>
            <h5>What We Do</h5>
            <p>We provide comprehensive chiropractic care to patients who were injured in auto accidents which caused them pain to their neck and back. Our fully licensed team of chiropractors uses adjustment techniques and specialized physical therapy to create pain-free lifestyles. Our goal is to relieve the pain caused by accident injuries through proper medical care and make sure our patients also get legal assistance to make sure their rights are protected.</p>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="py-5">
      <b-container>
        <div class="row row-cols-2 row-cols-md-3">
          <div v-for="item in persons" :key="item.name" class="cardSize text-center">
            <div class="col mb-4">
              <b-card :img-src="item.image" :img-alt="item.imgAlt" img-top>
                <b-card-text>
                  <span class="strong">{{ item.name }} </span><br/>
                  {{ item.title }}
                </b-card-text>
              </b-card>
            </div>
          </div>
        </div>
      </b-container>

      <div class="last"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
  return {
    persons: [
      {
        name: 'Dennis Watts',
        title: 'Doctor of Chiropractic',
        image: 'https://www.dropbox.com/s/nmuo2a2calyoa35/Watts.jpg?raw=1',
        imgAlt: 'Dennis Watts'
      },
      {
        name: 'Lawrence Kaplan',
        title: 'Doctor of Chiropractic',
        image: 'https://www.dropbox.com/s/ti9456af8ubudwq/Kaplan.jpg?raw=1',
        imgAlt: 'Lawrence Kaplan'
      },
      {
        name: 'Benjamin Geibell',
        title: 'Doctor of Chiropractic',
        image: 'https://www.dropbox.com/s/uyk42rn6zpbn0um/Geibell.jpg?raw=1',
        imgAlt: 'Benjamin Geibell'
      },
      {
        name: 'Sharon Hill',
        title: 'Office Manager',
        image: 'https://www.dropbox.com/s/dyhaou3eyr5cfzd/Hill.jpg?raw=1',
        imgAlt: 'Sharon Hill'
      },
      {
        name: 'Saida Castillo',
        title: 'Chiropractic Assistant',
        image: 'https://www.dropbox.com/s/6w2pf1y4xrq00s5/Castillo.jpg?raw=1',
        imgAlt: 'Saida Castillo'
      }
    ],
    show: true
  }
}
}
</script>

<style scoped>
  .cardSize {
    padding-bottom: 2em;
  }
  video {
    width: 100%;
  }
</style>