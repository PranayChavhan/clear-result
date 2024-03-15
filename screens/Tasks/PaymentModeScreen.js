import { View, ScrollView, TouchableWithoutFeedback, Text } from "react-native";
import React, { useState,  useRef } from "react";
import Screen from "../../components/Screen";
import TopBar from "../../components/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import { Radio, RadioGroup } from "@ui-kitten/components";
import CreditCard from "../../components/CreditCard";
import UPIPayment from "../../components/UPIPayment";
import InternetBanking from "../../components/InternetBanking";
const PaymentModeScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isTextInputFocused = useRef(false);
  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        className="px-4 py-4"
      >
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[16px] font-semibold">Payment Mode</Text>

          <TouchableWithoutFeedback>
            <Text
              className={`text-[14px] font-medium text-[#2F80ED] underline`}
            >
              Skip
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <RadioGroup
          style={{ marginTop: 20 }}
          selectedIndex={isTextInputFocused.current ? null : selectedIndex}
          onChange={(index) => {
            if (!isTextInputFocused.current) {
              setSelectedIndex(index);
            }
          }}
        >
          <Radio
            style={{
              borderBottomWidth: 0.5,
              paddingBottom: 10,
              marginBottom: 20,
            }}
          >
            Credit / Debit Card
          </Radio>

          {selectedIndex === 0 ? (
            <CreditCard
          />
          ) : (
            <></>
          )}
          <Radio
            style={{
              borderBottomWidth: 0.5,
              paddingBottom: 10,
              marginBottom: 20,
            }}
          >
            UPI Payments
          </Radio>

          {selectedIndex === 2 ? (
            <>
              <UPIPayment />
            </>
          ) : (
            <></>
          )}
          <Radio style={{ borderBottomWidth: 0.5, paddingBottom: 10 }}>
            Internet Banking
          </Radio>

          {selectedIndex === 4 ? (
            <>
              <InternetBanking />
            </>
          ) : (
            <></>
          )}
        </RadioGroup>
      </ScrollView>
    </Screen>
  );
};

export default PaymentModeScreen;
