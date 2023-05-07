import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import '../styles/pdfViewr.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Viewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  async function searchForText() {
    const pdf = await pdfjs.getDocument('https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf').promise;
    const searchResult = await pdf.find({
      query: searchText,
      highlightAll: true
    });
    setSearchResult(searchResult);
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
        <Document  file="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf"
        >
    <Page size="A4" pageNumber={1}
            className="pdf-container"
            >
    </Page>
  </Document>

    </div>
  );
}

export default Viewer;
