import React from 'react';
import ReactDOMServer from 'react-dom/server';

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
    const
    render() {
       
        let items = _.get(this.props, 'items', null);
        return (
            <Accordion allowZeroExpanded>
            {items.map((item) => (
                 
                <AccordionItem key={item.uuid}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        {ReactDOMServer.renderToString(item.heading).split('/n').map((i,key) => {
                        return <div key={key}>{i}</div>;
                    })}                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    {(item.content).split('/n').map((i,key) => {
                        return <div key={key} dangerouslySetInnerHTML={{ __html:i }}/>;
                    })}
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
);
    }
}
