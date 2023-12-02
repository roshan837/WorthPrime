import AuditPage from "components/pages/AuditPage";
import Bookkeeping from "components/pages/BookKeepingPage";
import HeaderTop from "components/HeaderTop.js";
import HomePage from "components/pages/HomePage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ConsultingPage from "components/pages/ConsultingPage";
import TaxPage from "components/pages/TAXPage";
import VatConsultingPage from "components/pages/VatConsultingPage";
import InternalAuditPage from "components/pages/InternalAuditPage";
import FooterLayout from "components/FooterLayout";

function App() {
  return (
    <Router basename="/">
      <HeaderTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/audit" element={<AuditPage />} />
        <Route path="/book-keeping" element={<Bookkeeping />} />
        <Route path="/corporate-tax" element={<ConsultingPage />} />
        <Route path="/tax" element={<TaxPage />} />
        <Route path="/internal-audit" element={<InternalAuditPage />} />
        <Route path="/vat-consulting" element={<VatConsultingPage />} />
      </Routes>
      <FooterLayout />
    </Router>
  );
}

export default App;
