import React from 'react';
import _ from 'lodash';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


export default class AccordionFaq extends React.Component {
    render() {
        let items = _.get(this.props, 'items', null);
        return (
            <Accordion allowZeroExpanded>
            {items.map((item) => (
                <AccordionItem key={item.uuid}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    {item.content}
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
);
    }
}
