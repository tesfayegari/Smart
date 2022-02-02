import * as React from 'react';
import styles from './RecordManagement.module.scss';
import { IRecordManagementProps } from './IRecordManagementProps';
import SPService from '../../services/SPService';
require('../../services/custom.css');


export default class RecordManagement extends React.Component < IRecordManagementProps, {} > {

  service: SPService;
  public render(): React.ReactElement<IRecordManagementProps> {
    return(
      <div className = { styles.recordManagement } >
        <h2>Record Management coming soon</h2>
      </div >
    );
  }
}
