import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../assets/logo.png";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    paddingBottom: 10,
  },
  logo: { width: 40, height: 40 },
  title: { fontSize: 16, fontWeight: "bold" },
  section: { marginBottom: 10 },
  sectionTitle: { fontSize: 14, fontWeight: "bold", marginBottom: 2 },
  text: { lineHeight: 1.5 },
  table: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  },
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
  tableCellLast: {
    flex: 1,
    padding: 5,
    fontSize: 12,
  },
  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
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
    fontWeight: "bold", // Make the name bold
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
    marginBottom: 10,
  },
});

const PatientReport = ({ patient }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
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
          <Text style={styles.title}>Said Ahmed Memorial Hospital</Text>
          <Text style={styles.address}>XYZ GT Road, Lahore</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "left",
            flex: 1,
          }}
        >
          <Text style={styles.doctorDetails}>11/16/2024</Text>
          <Text style={styles.doctorName}>Dr. Mukesh</Text>
          <Text style={styles.doctorQualification}>
            MBBS, FCPS (Obstetrician & Gynecology)
          </Text>

          <Text style={styles.doctorDetails}>
            Patient No: {patient.patient_id || "0000"}{" "}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Patient: {patient.full_name || "John Doe"}
        </Text>
      </View>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Age</Text>
          <Text style={styles.tableCell}>{patient.age || "35"}</Text>
          <Text style={styles.tableCell}>Gender</Text>
          <Text style={styles.tableCellLast}>{patient.gender || "Male"}</Text>
        </View>
        {/* <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Blood Type</Text>
          <Text style={styles.tableCell}>{patient.blood_type || "O+"}</Text>
          <Text style={styles.tableCell}>Address</Text>
          <Text style={styles.tableCellLast}>
            {patient.address || "123 Main St, Cityville"}
          </Text>
        </View> */}
        {/* <View style={styles.tableRowLast}>
          <Text style={styles.tableCell}>Phone</Text>
          <Text style={styles.tableCell}>{patient.phone || "(555) 123-4567"}</Text>
          <Text style={styles.tableCell}>Email</Text>
          <Text style={styles.tableCellLast}>
            {patient.email || "john.doe@email.com"}
          </Text>
        </View> */}
      </View>

      <View style={styles.section}>
        <Text style={[styles.doctorName, styles.marginBottomtemp]}>Temp:</Text>
        <Text style={styles.doctorName}>B/P:</Text>
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
            <Text style={styles.sectionTitle}>Treatment Recommendation</Text>
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
