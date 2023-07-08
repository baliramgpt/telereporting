import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginLeft: '0',
        padding: '12px 32px',
        gap: '16px',
        fontSize: '12px',
    },
    header: {
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
    },
    details: {
        height: '10%',
        width: '95%',
        border: '1px solid #000',
        borderRadius: '10px',
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: '16px',
    },
    detailsLeft: {
        flexDirection: 'row',
        gap: '12px',
        marginLeft: '16px',
        marginTop: '8px',
        width: '60%',
        // border: '1px solid #000',
    },
    detailsRight: {
        flexDirection: 'row',
        gap: '12px',
        marginRight: '16px',
        marginTop: '8px',
        // width: '40%',
        // border: '1px solid #000',
    },
    detailsHeading: {
        color: 'grey',
        lineHeight: '2',
    },
    detailsValue: {
        lineHeight: '2',
    },
    reportName: {
        // margin: '0',
        alignSelf: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        paddingBottom: '16px',
        // borderBottom: '1px solid #000'
    },
    modality: {
        fontSize: '12px',
        paddingBottom: '16px',
        borderBottom: '1px solid #000',
        lineHeight: '1.5',
    }
});

// Create Document Component
const PDFReports = (props) => (
    <PDFViewer style={styles.viewer}>
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text>Medanta Diagnostic Center</Text>
                </View>
                <View style={styles.details}>
                    <View style={styles.detailsLeft}>
                        <View style={styles.detailsHeading}>
                            <Text>Patient Name : </Text>
                            <Text>Refer By : </Text>
                            <Text>Test Name : </Text>
                        </View>
                        <View style={styles.detailsValue}>
                            <Text>Test 01</Text>
                            <Text>Test 01</Text>
                            <Text>Test 01</Text>
                        </View>
                    </View>
                    <View style={styles.detailsRight}>
                        <View style={styles.detailsHeading}>
                            <Text>Reg No. : </Text>
                            <Text>Age/Gender : </Text>
                            <Text>Date : </Text>
                        </View>
                        <View style={styles.detailsValue}>
                            <Text>Test 01</Text>
                            <Text>Test 01</Text>
                            <Text>Test 01</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.reportName}>
                    <Text>X-Ray Report</Text>
                </View>
                <View style={styles.modality}>
                    <Text>Title</Text>
                    <Text>PARANASAL SINUSES</Text>
                </View>
                <View style={styles.modality}>
                    <Text>Modality</Text>
                    <Text>X rays</Text>
                </View>
                <View style={styles.modality}>
                    <Text>Part</Text>
                    <Text>PNS Waters and Caldwell</Text>
                </View>
                <View style={styles.modality}>
                    <Text>Technique</Text>
                    <Text>PNS Waters and Caldwell</Text>
                </View>
                <View style={styles.modality}>
                    <Text>Findings</Text>
                    <Text>PNS Waters and Caldwell</Text>
                    <Text>PNS Waters and Caldwell</Text>
                    <Text>PNS Waters and Caldwell</Text>
                </View>
                <View style={styles.modality}>
                    <Text>Impression</Text>
                    <Text>* No abnormality detected</Text>
                </View>

            </Page>
        </Document>
    </PDFViewer>
);

export default PDFReports;