import React from "react";
import { Button } from "react-bootstrap";


function ShowMoreButton({more, title}) {
    return(
        <div>
            <div className="mb-2 text-center">
                <Button variant="primary" size="lg" href={more}>
                    Show More { title }
                </Button>{' '}
            </div>
        </div>
    )
}

export default ShowMoreButton;