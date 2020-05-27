import React, { FC } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Header from '../../components/Header';

const styles = StyleSheet.create({
    text: { flex: 2, marginTop: -35, textAlign: "justify" },
    robercikImage: { width: 100, height: 130, marginLeft: 10, marginTop: -35, },
    robercigImage: { flex: 2, height: 130, marginTop: -35, marginRight: 10},
    czerwoneImage: { width: "100%", marginTop: -20, height: 155 },
    row: {
      flexDirection: "row",
      paddingVertical: 25,
      paddingHorizontal: 20,
      width: "100%",
    },
  });

interface IPhotos {}

const Photos: FC<IPhotos> = (props) => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
    <Header title="TodoApp" />
    <View>
      <View>
        <View style={styles.row}>
          <Image
            source={require('../../assets/czerwone.jpg')}
            style={styles.czerwoneImage}
          />
        </View>
        <View style={styles.row}>
        <Image
            source={require('../../assets/robercig.jpg')}
            style={styles.robercigImage}
          />
          <Text style={styles.text}>
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeee
          </Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.text}>
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </Text>
          <Image
            source={require('../../assets/robercik.jpg')}
            style={styles.robercikImage}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </Text>
        </View>
      </View>
      </View>
      </ScrollView>
  );
};

export default Photos;