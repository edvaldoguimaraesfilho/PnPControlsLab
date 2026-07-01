import * as React from 'react';
import { IPeoplePickerContext, PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { IPeoplePickerWpProps } from './IPeoplePickerWpProps';

const PeoplePickerWp: React.FC<IPeoplePickerWpProps> = ({context}) => {
  
  const peoplePickerContext: IPeoplePickerContext = {
    absoluteUrl: context.pageContext.web.absoluteUrl,
    msGraphClientFactory: context.msGraphClientFactory,
    spHttpClient: context.spHttpClient
};

  const _getPeoplePickerItems = (items: any[]) => {
    console.log('Items:', items);
  };

  return (
    <PeoplePicker
    context={peoplePickerContext}
    titleText="People Picker"
    personSelectionLimit={3}    
    showtooltip={true}
    required={true}
    disabled={false}
    searchTextLimit={5}
    onChange={_getPeoplePickerItems}    
    principalTypes={[PrincipalType.User]}
    resolveDelay={1000} />
  );
};

export default PeoplePickerWp;  
