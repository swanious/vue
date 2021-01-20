<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <div class="navbar__logo">
        <h2>SSAFYING</h2>
      </div>
      <v-container class="navbar__contents py-1 fill-height">
        <!-- 메뉴 링크 -->
        <div class="menus">
          <v-btn
            class="btns"
            v-for="link in links"
            :key="link"
            text
          >
            {{ link }}
          </v-btn>
        </div>
      </v-container>
      <!-- 프로필 / 알람 -->
      <div class="navbar__user">
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
      <!-- 햄버거 메뉴 -->
      <div class="text-center burger__menu">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="grey darken-1"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Menu
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(link, index) in links"
              :key="index"
              @click="() => {}"
            >
              <v-list-item-title>{{ link }}</v-list-item-title>
            </v-list-item>
          </v-list>
          <v-divider class="my-2"></v-divider>

          <v-list-item
            link
            color="grey lighten-4"
          >
            <v-list-item-content>
              <v-list-item-title>
                <span style="color:red">로그아웃</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-menu>
      </div>

    </v-app-bar>


    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2"></v-col>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            </v-sheet>
          </v-col>
          <!-- 오른쪽 메뉴 바 -->
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.title }}
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
                      <span style="color:red">로그아웃</span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
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
        '게시판',
        '모집',
        '정보',
        '싸피장터',
      ],
      items: [
        { title: '프로필' },
        { title: '그룹 관리' },
        { title: '작성 게시글' },
        { title: '추천 게시글' },
        ],
    }),
  }
</script>

<style>
</style>