import * as React from 'react';
import styles from './PhysicalLocation.module.scss';
import { IPhysicalLocationProps } from './IPhysicalLocationProps';
import SPService from '../../services/SPService';


export default class PhysicalLocation extends React.Component < IPhysicalLocationProps, {} > {
  service: SPService;
  public render(): React.ReactElement<IPhysicalLocationProps> {
    return(
      <div className = { styles.physicalLocation } >
        <h2>Physical Location Coming soon</h2>
      </div >
    );
  }
}
