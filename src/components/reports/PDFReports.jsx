import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        margin: '32px 32px',
        gap: '16px'
    },
    reportName: {
        fontSize: '32px',
        fontWeight: 'bold',
        paddingBottom: '16px',
        borderBottom: '1px solid #000'
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
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.reportName}>
                <Text>Report Templates</Text>
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
);

export default PDFReports;