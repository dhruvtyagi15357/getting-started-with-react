import React from "react";
import { useState } from "react";


function About(props) {

    return (
        <div className="container my-5">
            <div className="accordion" id="accordionExample">
                <div className={`accordion-item bg-${props.darkTheme?"dark":"light"}`}>
                    <h2 className={`accordion-header`}>
                        <button
                            className={`accordion-button text-${props.darkTheme?"light":"dark"} bg-${props.darkTheme?"dark":"light"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            About the application
                        </button>
                    </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div className={`accordion-body text-${!props.darkTheme?"dark":"light"}`}>
                                {props.aboutText}
                            </div>
                        </div>
                </div>
                <div className={`accordion-item bg-${props.darkTheme?"dark":"light"}`}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button text-${props.darkTheme?"light":"dark"} bg-${props.darkTheme?"dark":"light"} collapsed`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className={`accordion-body text-${!props.darkTheme?"dark":"light"}`}>
                            <strong>This is the second item's accordion body.</strong>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
  );
}

export default About;
