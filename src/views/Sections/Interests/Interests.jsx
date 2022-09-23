import React, { useState } from "react";
import PropTypes from "prop-types";

import { Row, Modal, Button } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import "./Interests.scss";

const Interests = ({ className, frontmatter }) => {
  const [show, setShow] = useState(false);

  if (!frontmatter) {
    return null;
  }
  const { anchor, header: rootHeader, subheader: rootSubHeader, content } = frontmatter;
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="justify-content-start">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        
       
      </Row>
    </PageSection>
  );
};

Interests.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Interests.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Interests;
