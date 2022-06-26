import React from "react";
import { Button } from "../../Button";
import "./styles.scss";

export const SingleJobComponent = ({title, startDate, endDate, role, desc, link, img}) => {

  return (
    <div className="c-job-wrapper">
      <img className="c-job__image" src={img} alt="Jobimg" />
      <div className="c-job__text-wrapper">
        <h3 className="c-job__title heading">{title}</h3>
        <p className="c-job-date"><span>{startDate}</span> - <span>{endDate}</span></p>
        <p className="c-job-desc"><span>{role}</span> - {desc}</p>
        <Button href={link} text={'Visit website'} newTab customClass={'c-job-cta'} />
      </div>
    </div>
  );
};
