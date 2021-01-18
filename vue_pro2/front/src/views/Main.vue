<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <div>
        <h1 id="logo">SSAFYING</h1>
      </div>
      <v-container class="py-1 fill-height">
        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>

        <v-spacer></v-spacer>
        <div class="avatar__menu">
          <v-avatar
            class="mx-5"
            color="grey darken-1"
            size="32"
          ></v-avatar>
          <v-avatar
            class="mx-5"
            color="grey darken-1"
            size="32"
          ></v-avatar>
        </div>

        
      </v-container>
      <!-- 햄버거 메뉴 -->
      <div class="text-center burger__menu">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="dark"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Menu
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="() => {}"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import '../assets/css/main.css'

  export default {
    data: () => ({
      links: [
        'dd',
        'Messages',
        'Profile',
        'Updates',
      ],
      items: [
        { title: "ddd" },
        { title: this.links[1] },
        { title: this.links[2] },
        { title: this.links[3] },
        ],
    }),
    method: {
      on: function() {

      }
    }
  }
</script>

<style>
  v-container #logo {
    font-family: 'Noto Sans', Roboto, '맑은 고딕';
  }
</style>