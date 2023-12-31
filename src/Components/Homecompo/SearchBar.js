import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from "react-native";
import Categories from "../../constants/Catagories";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";
import { useColorTheme } from "../../constants/Colors";
import { useEffect } from "react";
import PriceRanges from "../../constants/PriceRange";
import SelectionBtn from "../comman/SelectionBtn.js";

import { CakeCategories } from "../../constants/CakeCategoris";
import ProductGrid from "../ProductRelated/ProductGrid";

const SearchBar = ({ cakes }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedCakes, setSearchedCakes] = useState([]);
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filteredCakesData, setFilteredCakesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState({});
  const [selectedFilterButton, setSelectedFilterButton] = useState("");

  
  useEffect(() => {
    if (searchText.length > 0 && searchText.length < 4) {
      setFilter(false);
      setLoading(true);
    } else if (searchText.length >= 4 && searchText.length === 6) {
      setLoading(false);
      setFilter(true);
    }
  }, [searchText]);
  useEffect(() => {
    if (searchedCakes.length > 0) {
      console.log("111",searchedCakes.length)
      setLoading(false);
      setFilter(true)
    }else{
     
       setFilter(false);
    }
   }, [searchedCakes]);

 const handleSearch = (text) => {
   const searchTextLower = text.toLowerCase();
   setSearchText(searchTextLower);
   setSearchedCakes([]);
   if (searchTextLower.length === 0 || searchTextLower.length > 3) {
     setFilteredCakesData([]);
     

     if (searchTextLower.length > 0 && searchTextLower.length < 4) {
       setSearchedCakes([]);
       setLoading(true)
     } else {
       const filtered = cakes.filter((cake) =>
         cake.searchTags.some((tag) =>
           tag.toLowerCase().includes(searchTextLower)
         )
       );
      console.log(filtered.length)
       const limitedResults = filtered.slice(0, 15);
       setSearchedCakes(limitedResults);
      if(limitedResults.length === 0) {
        setLoading(false)
      }
     }
   }
 };


  function filterCakesByPriceRange(range, minPrice, maxPrice) {
    setSelectedFilterButton(range);
    setSelectedPriceRange({ minPrice, maxPrice });

    const filteredByPrice = searchedCakes.filter(
      (cake) =>
        (minPrice === undefined || cake.price >= minPrice) &&
        (maxPrice === undefined || cake.price <= maxPrice)
    );

    setFilteredCakesData(filteredByPrice);
  }

  colors = useColorTheme();
  return (
    <View>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.secondary, borderColor: colors.black },
        ]}
      >
        <View style={styles.placeholder}>
          <View
            style={{
              marginHorizontal: moderateScale(5),
            }}
          >
            <Ionicons name="ios-search-sharp" size={20} color={colors.gray} />
          </View>
          <View>
            <TextInput
              placeholder="Search any Product..."
              placeholderTextColor={colors.black}
              keyboardType="default"
              value={searchText}
              onChangeText={handleSearch}
              style={{ alignItems: "center" }}
            />
          </View>
        </View>
      </View>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="small" color={colors.secondary} />
        </View>
      )}
      {filter && (
        <View>
          <View style={{ marginTop: moderateVerticalScale(4) }}>
            <View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={{ marginLeft: moderateVerticalScale(10) }}
              >
                {PriceRanges.map((item) => (
                  <Pressable
                    key={item.id}
                    onPress={() =>
                      filterCakesByPriceRange(
                        item.range,
                        item.minPrice,
                        item.maxPrice
                      )
                    }
                    style={[
                      {
                        flexDirection: "row",

                        marginHorizontal: moderateVerticalScale(3),
                      },
                      selectedFilterButton == item.range && {
                        backgroundColor: "red",
                      },
                    ]}
                  >
                    <SelectionBtn
                      btnText={item.range}
                      pStyle={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: moderateVerticalScale(100),
                        backgroundColor: colors.secondary,
                      }}
                    />
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      )}
      {searchText && (
        <View>
          {searchedCakes.length > 0 && (
            <View>
              <Text
                style={{
                  marginTop: moderateVerticalScale(5),
                  marginHorizontal: moderateVerticalScale(10),
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Search Result for : {searchText}
              </Text>
              {filteredCakesData.length > 0 ? (
                <ProductGrid products={filteredCakesData} />
              ) : (
                <ProductGrid products={searchedCakes} />
              )}
            </View>
          )}
          {searchedCakes.length === 0 && searchText.length > 0 && (
            <Text style={styles.noResultText}>No Products Found!</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(10),
    marginTop: moderateVerticalScale(5),

    borderWidth: 1,
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    padding: scale(5),
  },
  placeholder: {
    flexDirection: "row",
    alignItems: "center",
  },
  noResultText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
