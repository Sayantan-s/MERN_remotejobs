import SimilarJobCard from 'components/elements/SimilarJobCard.component';
import { Heading, StackVertical, View } from 'components/index';
import React from 'react';

const SimilarJobs = ({ data }) => {
    return (
        <View>
            <Heading level={3}>Similar Jobs</Heading>
            <StackVertical mt={7} gap={5}>
                {data?.map(({ _id, companyInfo, roleInfo }) => (
                    <SimilarJobCard key={_id} id={_id} {...companyInfo} {...roleInfo} />
                ))}
            </StackVertical>
        </View>
    );
};

export default SimilarJobs;
