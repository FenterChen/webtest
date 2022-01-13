<template>
  <div class="phone">
    <div class="wrap">
      <header class="header">
        <p class="home"><router-link to="/">&lt;</router-link></p>
        <h1>收款帳戶</h1>
      </header>
      <section>
        <div class="list" v-for="item in 4" :key="item.id">
          <div><input type="radio" /></div>
          <div class="content">
            <div class="buttonconfirm">
              <button>默認</button>
              <p>中國郵政銀行XX支行</p>
            </div>
            <h3>阿狸</h3>
            <p>6217 8888 8888 9997 789</p>
          </div>
          <div class="edit">
            <img src="../assets/edit.png" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/reset.css";

.phone {
  background-color: rgb(247, 246, 251);
}
.header {
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #fff;
  border-bottom: 3px solid rgb(247, 246, 251);
}
.home {
  width: 50px;
  height: 50px;
  font-size: 24px;
  position: absolute;
  left: 1%;
  top: calc(50% - 25px);
}
h1 {
  font-size: 24px;
  padding: 5px;
}
section {
  margin-top: 48px;
  background-color: rgb(247, 246, 251);
  height: 100vh;
}
a {
  color: black;
  text-decoration: none;
}

.edit {
  margin-top: 88px;
  margin-right: 30px;
}
.edit img {
  width: 30px;
  height: 27px;
}

input {
  width: 42px;
  height: 42px;
  font-size: 20px;
  margin-right: 28px;
  margin-left: 30px;
  margin-top: 78px;
}
button {
  width: 64px;
  height: 32px;
  border-radius: 4px;
  background-color: rgb(51, 51, 51);
  color: #fff;
}
.list {
  display: flex;
  justify-content: center;
  text-align: left;
  background-color: #fff;
  margin-bottom: 30px;
}
.content > p {
  color: rgb(51, 51, 51);
  padding-bottom: 40px;
}
.buttonconfirm {
  display: flex;
  padding-top: 40px;
  padding-bottom: 28px;
}
p {
  font-size: 28px;
  display: flex;
  align-items: center;
}
.buttonconfirm p {
  font-size: 28px;
  color: rgb(170, 170, 170);
  padding-left: 30px;
}
h3 {
  font-size: 28px;
  padding-bottom: 10px;
}
.content {
  flex-grow: 1;
}
</style>