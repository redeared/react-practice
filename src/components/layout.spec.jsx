import React from 'react';
import TestRenderer from 'react-test-renderer';

import { ColumnsLayout, RowsLayout, FixedLayoutBlock, GrowLayoutBlock } from './layout';


describe('Layout components', () => {
    it('GrowLayoutBlock should render without crash', () => {
        const comp = TestRenderer.create(<GrowLayoutBlock>child</GrowLayoutBlock>).toJSON();
        expect(comp).toMatchSnapshot();
    });

    it('RowsLayout should render without crash', () => {
        const comp = TestRenderer.create(<RowsLayout>child</RowsLayout>).toJSON();
        expect(comp).toMatchSnapshot();
    });
});
