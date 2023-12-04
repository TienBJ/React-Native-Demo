import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Image
        style={styles.patternIcon}
        source={require("../assets/pattern.svg")}
      />
      <View style={[styles.menuList, styles.menuLayout1]}>
        <View style={[styles.menu1, styles.menuLayout1]}>
          <View style={[styles.menu1Child, styles.childLayout]} />
          <Text style={styles.menuName}>Green Noddle</Text>
          <Text style={[styles.price, styles.priceTypo]}>$15</Text>
          <Text style={styles.restaurantName}>Noodle Home</Text>
          <Image
            style={[styles.photoMenuIcon, styles.buyNowPosition]}
            contentFit="cover"
            source={require("../assets/photo-menu.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.iconNotification, styles.iconLayout]}
        source={require("../assets/icon-notification.svg")}
      />
      <View style={[styles.text, styles.textLayout]}>
        <Text style={[styles.tiiitleText, styles.textLayout]}>
          Find Your Favorite Food
        </Text>
        <Text style={[styles.nearestRestaurant, styles.tiiitleTextTypo]}>
          Nearest Restaurant
        </Text>
        <Text style={[styles.popularMenu, styles.tiiitleTextTypo]}>
          Popular Menu
        </Text>
      </View>
      <View style={[styles.search, styles.searchPosition]}>
        <View style={[styles.rectangle, styles.frame1Bg]} />
        <Image
          style={styles.iconSearch}
          source={require("../assets/icon-search.svg")}
        />
        <Text style={styles.searcSample}>What do you want to order?</Text>
      </View>
      <Image
        style={[styles.filterIcon, styles.searchPosition]}
        source={require("../assets/filter-icon.svg")}
      />
      <View style={styles.viewMore}>
        <Text style={[styles.viewMore1, styles.viewTypo]}>View More</Text>
        <Text style={[styles.viewMore2, styles.viewTypo]}>View More</Text>
      </View>
      <View style={[styles.promoAdvertising, styles.frameLayout]}>
        <View style={[styles.frame, styles.frameLayout]} />
        <View style={[styles.ctaButton, styles.ctaButtonLayout]}>
          <View style={[styles.rectangle1, styles.ctaButtonLayout]} />
          <Text style={[styles.buyNow, styles.buyNowPosition]}>Buy Now</Text>
        </View>
        <Text style={styles.voucherTittle}>Special Deal For October</Text>
        <Image
          style={[styles.imageIcon, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
      </View>
      <View style={[styles.menuBar, styles.menuLayout]}>
        <View style={[styles.menuBarChild, styles.menuLayout]} />
        <View style={[styles.iconHomeActive, styles.frame1Layout]}>
          <View style={[styles.frame1, styles.frame1Layout]} />
          <Image
            style={[styles.iconlybulkhome, styles.iconLayout]}
            source={require("../assets/iconlybulkhome.svg")}
          />
          <Text style={styles.home1}>Home</Text>
        </View>
        <Image
          style={[styles.iconlybulkchat, styles.iconProfileLayout]}
          source={require("../assets/iconlybulkchat.svg")}
        />
        <View style={[styles.menuBarItem, styles.menuBarItemLayout]} />
        <Text style={[styles.text1, styles.textTypo]}>7</Text>
        <View style={styles.iconCart}>
          <Image
            style={[styles.iconlybulkbuy, styles.iconProfileLayout]}
            source={require("../assets/iconlybulkbuy.svg")}
          />
          <View style={styles.notificationCart}>
            <View
              style={[styles.notificationCartChild, styles.menuBarItemLayout]}
            />
            <Text style={[styles.text2, styles.textTypo]}>7</Text>
          </View>
        </View>
        <Image
          style={[styles.iconProfile, styles.iconProfileLayout]}
          source={require("../assets/icon-profile.svg")}
        />
      </View>
      <View style={styles.restaurantList}>
        <View style={[styles.restaurant3, styles.restaurantLayout]}>
          <View style={[styles.restaurant3Child, styles.restaurantLayout]} />
          <Text style={[styles.restoName, styles.restoTypo]}>Good Food</Text>
          <Text style={[styles.distanceInMinute, styles.distanceTypo]}>
            12 Mins
          </Text>
          <Image
            style={styles.restaurantImageIcon}
            contentFit="cover"
            source={require("../assets/restaurant-image.png")}
          />
        </View>
        <View style={[styles.restaurant2, styles.groupChildLayout]}>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <View style={styles.mcdonaldS151} />
            <Text style={[styles.restoName1, styles.restoName1Position]}>
              Healthy Food
            </Text>
            <Text style={[styles.distanceInMinute1, styles.distanceTypo]}>
              8 Mins
            </Text>
          </View>
          <Image
            style={styles.restaurantImageIcon1}
            contentFit="cover"
            source={require("../assets/restaurant-image1.png")}
          />
        </View>
        <View style={[styles.restaurant1, styles.restaurantLayout]}>
          <View style={[styles.restaurant3Child, styles.restaurantLayout]} />
          <Text style={[styles.restoName2, styles.restoTypo]}>Vegan Resto</Text>
          <Text style={[styles.distanceInMinute, styles.distanceTypo]}>
            12 Mins
          </Text>
          <Image
            style={[styles.resturantImageIcon, styles.restoName1Position]}
            contentFit="cover"
            source={require("../assets/resturant-image.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuLayout1: {
    height: 87,
    width: 323,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xl,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  priceTypo: {
    color: Color.colorBlueviolet,
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
  },
  buyNowPosition: {
    top: 11,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textLayout: {
    width: 233,
    position: "absolute",
  },
  tiiitleTextTypo: {
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    color: Color.colorGray,
    left: 0,
  },
  searchPosition: {
    bottom: "74.14%",
    top: "19.7%",
    height: "6.16%",
    position: "absolute",
  },
  frame1Bg: {
    opacity: 0.1,
    backgroundColor: Color.colorBlueviolet,
  },
  viewTypo: {
    fontFamily: FontFamily.bentonSansBook,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    color: Color.colorBlueviolet,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 150,
    width: 325,
    position: "absolute",
  },
  ctaButtonLayout: {
    height: 32,
    width: 82,
    position: "absolute",
  },
  menuLayout: {
    height: 74,
    width: 355,
    position: "absolute",
  },
  frame1Layout: {
    height: 44,
    width: 105,
    position: "absolute",
  },
  iconProfileLayout: {
    opacity: 0.5,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  menuBarItemLayout: {
    height: 13,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorTomato,
    width: 13,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 12,
    fontSize: FontSize.size_4xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    position: "absolute",
  },
  restaurantLayout: {
    width: 147,
    height: 184,
    top: 0,
    position: "absolute",
  },
  restoTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: 116,
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    color: Color.colorGray,
  },
  distanceTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    top: 141,
    opacity: 0.5,
    fontFamily: FontFamily.bentonSansBook,
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  groupChildLayout: {
    width: 145,
    height: 184,
    top: 0,
    position: "absolute",
  },
  restoName1Position: {
    left: 21,
    position: "absolute",
  },
  patternIcon: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  menu1Child: {
    height: 87,
    width: 323,
    position: "absolute",
    top: 0,
  },
  menuName: {
    marginTop: -18.5,
    textAlign: "left",
    color: Color.colorGray,
    fontFamily: FontFamily.bentonSansMedium,
    left: "29.41%",
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    top: "50%",
    position: "absolute",
  },
  price: {
    marginTop: -14.5,
    left: "81.73%",
    fontSize: 22,
    lineHeight: 29,
    top: "50%",
    color: Color.colorBlueviolet,
    position: "absolute",
  },
  restaurantName: {
    marginTop: 5.5,
    fontSize: 14,
    fontFamily: FontFamily.bentonSansRegular,
    opacity: 0.3,
    letterSpacing: 1,
    textAlign: "left",
    color: Color.colorGray,
    left: "29.41%",
    top: "50%",
    position: "absolute",
  },
  photoMenuIcon: {
    borderRadius: 10,
    width: 64,
    height: 64,
    left: 10,
  },
  menu1: {
    left: 0,
    top: 0,
  },
  menuList: {
    top: 689,
    left: 25,
  },
  iconNotification: {
    height: "17.86%",
    width: "32.8%",
    top: "6.03%",
    bottom: "76.11%",
    left: "67.2%",
    right: "0%",
    position: "absolute",
  },
  tiiitleText: {
    fontSize: 31,
    lineHeight: 41,
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    color: Color.colorGray,
    left: 0,
    top: 0,
  },
  nearestRestaurant: {
    top: 345,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.bentonSansBold,
    position: "absolute",
  },
  popularMenu: {
    top: 589,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.bentonSansBold,
    position: "absolute",
  },
  text: {
    top: 60,
    left: 31,
    height: 609,
  },
  rectangle: {
    height: "100%",
    top: "0%",
    borderRadius: 15,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconSearch: {
    top: 13,
    left: 18,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  searcSample: {
    top: 19,
    left: 61,
    fontFamily: FontFamily.robotoRegular,
    opacity: 0.4,
    fontSize: FontSize.size_xs,
    letterSpacing: 1,
    color: Color.colorBlueviolet,
    textAlign: "left",
    position: "absolute",
  },
  search: {
    width: "71.2%",
    right: "22.13%",
    left: "6.67%",
  },
  filterIcon: {
    width: "13.07%",
    right: "6.67%",
    left: "80.27%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  viewMore1: {
    top: 0,
  },
  viewMore2: {
    top: 244,
  },
  viewMore: {
    top: 409,
    left: 286,
    width: 57,
    height: 260,
    position: "absolute",
  },
  frame: {
    borderRadius: 16,
    backgroundColor: Color.colorBlueviolet,
    width: 325,
    left: 0,
    top: 0,
  },
  rectangle1: {
    borderRadius: 6,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  buyNow: {
    left: 19,
    fontSize: 10,
    lineHeight: 13,
    color: Color.colorBlueviolet,
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
  },
  ctaButton: {
    top: 88,
    left: 173,
    height: 32,
    width: 82,
  },
  voucherTittle: {
    top: 30,
    fontSize: 17,
    lineHeight: 22,
    width: 142,
    color: Color.colorWhite,
    left: 173,
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    position: "absolute",
  },
  imageIcon: {
    left: 0,
    top: 0,
  },
  promoAdvertising: {
    top: 230,
    left: 25,
  },
  menuBarChild: {
    borderRadius: Border.br_3xl,
    left: 0,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  frame1: {
    borderRadius: 12,
    opacity: 0.1,
    backgroundColor: Color.colorBlueviolet,
    left: 0,
    top: 0,
  },
  iconlybulkhome: {
    height: "54.55%",
    width: "22.86%",
    top: "22.73%",
    right: "60.95%",
    bottom: "22.73%",
    left: "16.19%",
    position: "absolute",
  },
  home1: {
    top: 16,
    left: 53,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    color: Color.colorBlueviolet,
    textAlign: "left",
    fontFamily: FontFamily.bentonSansMedium,
    position: "absolute",
  },
  iconHomeActive: {
    top: 15,
    left: 20,
  },
  iconlybulkchat: {
    height: "32.43%",
    width: "6.76%",
    top: "33.78%",
    right: "10.7%",
    left: "82.54%",
    bottom: "33.78%",
  },
  menuBarItem: {
    top: 23,
    left: 308,
  },
  text1: {
    top: 25,
    left: 247,
  },
  iconlybulkbuy: {
    height: "92.31%",
    width: "85.71%",
    top: "7.69%",
    right: "14.29%",
    left: "0%",
    bottom: "0%",
  },
  notificationCartChild: {
    left: 0,
    top: 0,
  },
  text2: {
    top: 2,
    left: 4,
  },
  notificationCart: {
    left: 15,
    height: 14,
    width: 13,
    top: 0,
    position: "absolute",
  },
  iconCart: {
    height: "35.14%",
    width: "7.89%",
    top: "31.08%",
    right: "29.01%",
    left: "63.1%",
    bottom: "33.78%",
    position: "absolute",
  },
  iconProfile: {
    height: "27.03%",
    width: "4.51%",
    top: "36.49%",
    right: "47.33%",
    bottom: "36.49%",
    left: "48.17%",
  },
  menuBar: {
    top: 728,
    left: 10,
  },
  restaurant3Child: {
    borderRadius: Border.br_3xl,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  restoName: {
    left: 32,
    position: "absolute",
  },
  distanceInMinute: {
    left: 51,
  },
  restaurantImageIcon: {
    top: 462,
    left: 388,
    width: 86,
    height: 88,
    position: "absolute",
  },
  restaurant3: {
    left: 332,
  },
  groupChild: {
    borderRadius: Border.br_3xl,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  mcdonaldS151: {
    top: 33,
    left: 43,
    width: 59,
    height: 49,
    position: "absolute",
    overflow: "hidden",
  },
  restoName1: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: 116,
    fontFamily: FontFamily.bentonSansBold,
    textAlign: "left",
    color: Color.colorGray,
  },
  distanceInMinute1: {
    left: 50,
  },
  rectangleParent: {
    left: 0,
  },
  restaurantImageIcon1: {
    top: 8,
    left: 26,
    width: 90,
    height: 98,
    position: "absolute",
  },
  restaurant2: {
    left: 167,
  },
  restoName2: {
    left: 25,
    position: "absolute",
  },
  resturantImageIcon: {
    top: 26,
    width: 96,
    height: 73,
  },
  restaurant1: {
    left: 0,
  },
  restaurantList: {
    top: 445,
    width: 479,
    height: 184,
    left: 25,
    position: "absolute",
  },
  home: {
    borderRadius: 20,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Home;
