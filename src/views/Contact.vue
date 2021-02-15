<template>
  <div>
    <div class="bg-info text-white py-5">
      <b-container>
        <h2>Visit Us at One of Our Two Locations</h2>
        <b-row>
          <b-col>
            <b-card no-body class="overflow-hidden my-5">
              <b-row no-gutters>
                <b-col md="4" class="h5">
                  <b-card-body>
                    <b-card-text>
                      <a href="https://maps.google.com/?q=5410 North Tryon St, Charlotte, NC 28213">
                        <address> 5410 North Tryon St. <br/> Charlotte, NC 28213 </address>
                      </a>
                      <a class="small" href="tel:704-372-7200">English 704-372-7200</a> <br/>
                      <a class="small" href="tel:704-777-0904">Español 704-777-0904</a> <br />
                      <a class="small" href="mailto:info@accidentandinjurycharlotte.com" target="_blank">info@accidentandinjurycharlotte.com</a>
                    </b-card-text>
                  </b-card-body>
                </b-col>
                <b-col md="8">
                  <b-embed
                    frameborder="0"
                    style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCFKg21pXAn0emYGvr7NJXMNCHEBysL998&q=5410 North Tryon St Charlotte, NC 28213"
                    allowfullscreen
                  />
                </b-col>
              </b-row>
            </b-card>

            <b-card no-body class="overflow-hidden my-5">
              <b-row no-gutters>
                <b-col md="4" class="h5">
                  <b-card-body>
                    <b-card-text>
                      <a href="https://maps.google.com/?q=2501 Beatties Ford Rd, Charlotte, NC 28216">
                        <address> 2501 Beatties Ford Rd. <br/> Charlotte, NC 28216 </address>
                      </a>
                      <a class="small" href="tel:704-393-8447">English 704-393-8447</a> <br/>
                      <a class="small" href="tel:704-777-0905">Español 704-777-0905</a> <br />
                      <a class="small" href="mailto:info@accidentandinjurycharlotte.com" target="_blank">info@accidentandinjurycharlotte.com</a>
                    </b-card-text>
                  </b-card-body>
                </b-col>
                <b-col md="8">
                  <b-embed
                    frameborder="0"
                    style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCFKg21pXAn0emYGvr7NJXMNCHEBysL998&q=2501 Beatties Ford Rd Charlotte, NC 28216"
                    allowfullscreen
                  />
                </b-col>
              </b-row>
            </b-card>

          </b-col>
        </b-row>
      </b-container>
    </div>

    <b-container class="py-5">
      <b-row>
        <b-col>
          <h2 class="mb-4">Get Your Free Appointment Consultation</h2>
          <NewForm />
        </b-col>
      </b-row>
    </b-container>

    <div class="last"></div>
  </div>
</template>

<script>
import NewForm from '@/components/NewForm.vue'
export default {
  name: "Contact",
  components: {
    NewForm
  }
}
</script>

<style scoped>
a {
  color: black;
}
</style>