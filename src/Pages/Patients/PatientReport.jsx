import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font
} from "@react-pdf/renderer";
import logo from "../../assets/logo.png";

import MontserratRegular from "../../assets/fonts/Montserrat-Regular.ttf";  
import MontserratBold from "../../assets/fonts/Montserrat-Bold.ttf";
import OpenSansRegular from "../../assets/fonts/OpenSans-Regular.ttf";  
import OpenSansSemiBold from "../../assets/fonts/OpenSans-SemiBold.ttf";
import OpenSansBold from "../../assets/fonts/OpenSans-Bold.ttf";

Font.register({
  family: "OpenSans",
  fonts: [
    { src: OpenSansRegular, fontWeight: "normal" },
    { src: OpenSansBold, fontWeight: "bold" },
    { src: OpenSansSemiBold, fontWeight: "semi-bold" },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: "OpenSans",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#000",
    marginBottom: 5,
    paddingBottom: 5,
  },
  logo: { width: 80, height: 80 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom:"2" },
  section: { marginBottom: 5 },
  sectionTitle: { fontSize: 14, fontWeight: "bold", marginBottom: 2 },
  text: { lineHeight: 1.5 },
  table: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 5,
  },
  // tableContainer: {
  //   width: "70%", // Set the container width to 70% of the parent (screen/page)
  //   alignSelf: "left", // Center the table horizontally
  //   marginVertical: 5,
  // },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  tableRowLast: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    padding: 5,
    borderRightWidth: 1,
    borderColor: "#000",
    fontSize: 12,
  },
  tableCellText: {
    width: 80, // Fixed width for "Age" text
    padding: 5,
    borderRightWidth: 1,
    borderColor: "#000",
    fontSize: 12,
    textAlign: "center",
  },
  tableCellLast: {
    flex: 1,
    padding: 5,
    fontSize: 12,
  },
  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  leftColumn: {
    width: "30%",
    paddingRight: 10,
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
  rightColumn: {
    width: "70%",
    paddingLeft: 10,
  },
  doctorName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  tempName: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 10,
  },
  doctorQualification: {
    fontSize: 10, // Make the qualification smaller
  },
  doctorDetails: {
    fontSize: 12, // Default font size for other details
  },
  divider: {
    height: 1, // Thickness of the line
    backgroundColor: "#ccc", // Line color
    marginVertical: 10, // Spacing around the line
  },
  marginBottomtemp: {
    marginBottom: 5,
  },
});

const calculateAge = (dateOfBirth) => {
  if (!dateOfBirth) return "N/A";
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const formatDate = (dateString) => {
  if (!dateString) return ''; // Handle null or undefined
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const PatientReport = ({ patient }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "left",
            flex: 1,
            justifyContent: "left",
          }}
        >
          <Image style={styles.logo} src={logo} />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 2,
          }}
        >
          <Text style={styles.title}>Said Ahmed Medical Centre</Text>
          <Text style={styles.address}>China Road,China Scheme, Lahore</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <Text style={styles.doctorName}>{patient.doctor_name}</Text>
          <Text style={styles.doctorQualification}>
          {patient.specialization}
          </Text>
          <Text style={styles.doctorQualification}>
          {patient.qualification}
          </Text>

          
        </View>
      </View>

      <View style={[styles.section, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
        <Text style={styles.sectionTitle}>
          Patient Name: {patient.full_name || "John Doe"}
        </Text>

        <View style={styles.section}>

        <Text style={styles.doctorDetails}>
           {formatDate(patient?.checkup_date)}
        </Text>

        <Text style={styles.doctorDetails}>
            Patient No: {patient.patient_id || "0000"}{" "}
          </Text>

        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCellText}>Age</Text>
          <Text style={styles.tableCell}> {patient.age || calculateAge(patient.date_of_birth)}</Text>
          <Text style={styles.tableCellText}>Gender</Text>
          <Text style={styles.tableCell}>{patient.gender || "Male"}</Text>
        </View>
      </View>


      <View style={styles.section}>
        <Text style={[styles.tempName, styles.marginBottomtemp]}>Temp:</Text>
        <Text style={[styles.doctorName, styles.marginBottomtemp]}>B/P:</Text>
        <Text style={styles.doctorName}>Pulse Rate:</Text>
      </View>
      <View style={styles.divider} />

      <View style={styles.contentRow}>
        <View style={styles.leftColumn}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>History</Text>
            <Text style={styles.text}>
              {patient.history || "\n\n\n\n\n\n\n\n"}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Diagnose</Text>
            <Text style={styles.text}>
              {patient.diagnosis || "\n\n\n\n\n\n\n\n"}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recommendation</Text>
            <Text style={styles.text}>
              {patient.diagnosis || "\n\n\n\n\n\n\n\n"}
            </Text>
          </View>
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.section}>
            {/* <Text style={styles.sectionTitle}>Treatment Recommendation</Text> */}
            <Text style={styles.text}>
              {patient.treatment_recommendation ||
                ""}
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default PatientReport;