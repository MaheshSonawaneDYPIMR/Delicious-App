import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import userData from "../constants/UserData";
import { moderateVerticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorTheme } from "../constants/Colors";
import CommonHeader from "../Components/comman/CommonHeader";
const OrderHistory = () => {
  const colors =useColorTheme()
  const navigation = useNavigation()
  const OrderData = userData.userProfiles[0].orderHistory;
  const [checkStatus,setCheckStatus] = useState();
  return (
    <View style={[styles.container,{backgroundColor:colors.primary}]}>
      <CommonHeader
        text={"Your Orders"}
        icon={<AntDesign name="arrowleft" size={24} color={colors.black} />}
        event={() => navigation.goBack()}
      />
      <ScrollView>
        {OrderData.map((order) => (
          <View
            key={order.orderId}
            style={[styles.orders, { backgroundColor: colors.secondary }]}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: moderateVerticalScale(5),
                marginBottom: moderateVerticalScale(10),
              }}
            >
              <View
                style={[
                  styles.idContainer,
                  {
                    borderColor: colors.black,
                    backgroundColor: colors.primary,
                  },
                ]}
              >
                <Text style={[styles.orderid,{color:colors.black}]}>OrderID:</Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: colors.black,
                  }}
                >
                  {order.orderId}
                </Text>
              </View>
            </View>

            <View>
              <Text style={[styles.title, { color: colors.black }]}>
                Date: {order.date}
              </Text>

              <View style={{ flexDirection: "column", textAlign: "center" }}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={[styles.title, { color: colors.black }]}>
                    Products:
                  </Text>
                  <View
                    style={{
                      flexDirection: "column",
                      flexWrap: "wrap",

                      alignContent: "center",
                    }}
                  >
                    {order.items.map((item) => (
                      <View
                        style={[
                          styles.products,
                          {
                            borderColor: colors.black,
                            backgroundColor: colors.primary,
                          },
                        ]}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            flex: 1,
                            justifyContent: "space-between",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "column",
                              width: "65%",
                              flexWrap: "wrap",
                            }}
                          >
                            <View
                              style={{ flexDirection: "row", width: "70%" }}
                            >
                              <Text
                                style={[styles.text, { color: colors.black }]}
                              >
                                Name:
                              </Text>
                              <Text
                                style={{
                                  flexWrap: "wrap",
                                  color: colors.black,
                                }}
                              >
                                {item.productName}
                              </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <Text
                                style={[styles.text, { color: colors.black }]}
                              >
                                Quantity:
                              </Text>
                              <Text>{item.quantity}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <Text
                                style={[styles.text, { color: colors.black }]}
                              >
                                Price:
                              </Text>
                              <Text style={{ color: colors.black }}>
                                {item.price}
                              </Text>
                            </View>
                          </View>

                          {item.status === 4 ? (
                            <View
                              style={{
                                width: "100%",
                                flex: 1,
                                justifyContent: "center",
                              }}
                            >
                              <View
                                style={[
                                  styles.status,
                                  {
                                    borderRadius: moderateVerticalScale(20),
                                    height: moderateVerticalScale(40),
                                    width: moderateVerticalScale(40),
                                    borderColor:colors.black
                                  },
                                ]}
                              >
                                <MaterialIcons
                                  name="file-download-done"
                                  size={30}
                                  color={colors.black}
                                />
                              </View>
                            </View>
                          ) : (
                            <Pressable
                              style={[
                                styles.status,
                                {
                                  borderColor: colors.black,
                                  backgroundColor: colors.tertiary,
                                },
                              ]}
                              onPress={() =>
                                navigation.navigate("ProductStatus", {
                                  statuss: item.status,
                                })
                              }
                            >
                              <Text
                                style={[styles.text, { color: colors.black }]}
                              >
                                Status
                              </Text>
                            </Pressable>
                          )}
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: primary,
    flex: 1,
    marginTop: moderateVerticalScale(27.250),
  },
  orders: {
    margin: moderateVerticalScale(10),
    borderWidth: 1,
    padding: moderateVerticalScale(10),
    borderRadius: 15,
  //  backgroundColor: secondary,
  },
  orderid: {
    fontSize: 17,
    fontWeight: "bold",
  },
  idContainer: {
    padding: moderateVerticalScale(5),
    textAlign: "center",
    width: "50%",
    flexDirection: "row",
   // backgroundColor: primary,
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 0.8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: moderateVerticalScale(5),
    borderWidth: 0.8,
    padding: moderateVerticalScale(7),
    width: "90%",
    //backgroundColor: primary,
    borderRadius: 9,
  },
  text: {
    flexWrap: "wrap",
    fontSize: 15,
    fontWeight: "500",
  },
  status: {
    borderWidth: 0.8,
    width: moderateVerticalScale(70),
    height: moderateVerticalScale(35),
    borderRadius: 7,
    margin: moderateVerticalScale(10),
    alignSelf:'center',
    //backgroundColor:tertiary,
    justifyContent:'center',
    alignItems:'center'
  },
});
