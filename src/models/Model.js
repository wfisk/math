import { collectionData, docData } from 'rxfire/firestore';
import { map, startWith } from 'rxjs/operators';

import { firestore } from 'src/services/firebase';

export default class Model {

  static add( props, { parent = null } = {} ) {
    let collectionPath = this.getCollectionId();
    if ( parent ) {
      collectionPath = parent.getDocumentPath() + '/' + collectionPath;
    }
    if ( props.id ) {
      let { id, ...otherProps } = props;
      const documentPath = collectionPath + '/' + id;
      const documentRef = firestore.doc( documentPath );
      documentRef.set( otherProps );

    } else {
      const collectionRef = firestore.collection( collectionPath );
      collectionRef.add( props );
    }
  }


  static all( { parent = null, order = '' } = {} ) {
    let collectionPath = this.getCollectionId();
    if ( parent ) {
      collectionPath = parent.getDocumentPath() + '/' + collectionPath;
    }

    const collectionRef = firestore.collection( collectionPath );
    let itemClass = this;

    return collectionData( collectionRef, 'id' ).pipe(
      map( items => items.map( it => new itemClass( it, { parent: parent } ) ) ),
      map( items => items.sort( ( a, b ) => a[ order ] - b[ order ] ) ),
      startWith( [] )
    );
  }


  static deleteById( id, { parent = null } = {} ) {
    let documentPath = this.getCollectionId() + '/' + id;
    if ( parent ) {
      documentPath = parent.getDocumentPath() + '/' + documentPath;
    }

    firestore.doc( documentPath ).delete();
  }

  static find( id, { parent = null } = {} ) {
    let documentPath = this.getCollectionId() + '/' + id;
    if ( parent ) {
      documentPath = parent.getDocumentPath() + '/' + documentPath;
    }

    let documentRef = firestore.doc( documentPath );
    let itemClass = this;

    let result = docData( documentRef, 'id' ).pipe(
      map( data => new itemClass( data, { parent: parent } ) ),
      startWith( null )
    );
    // result.set = result.next;

    return result;
  }


  static findWhere( id, { parent = null } = {} ) {
    let documentPath = this.getCollectionId() + '/' + id;
    if ( parent ) {
      documentPath = parent.getDocumentPath() + '/' + documentPath;
    }

    let documentRef = firestore.doc( documentPath );
    let itemClass = this;

    let result = docData( documentRef, 'id' ).pipe(
      map( data => new itemClass( data, { parent: parent } ) ),
      startWith( null )
    );
    // result.set = result.next;

    return result;
  }



  static getCollectionId() {
    return '';
  }

  static updateById( id, props, { parent = null } = {} ) {
    let documentPath = this.getCollectionId() + '/' + id;
    if ( parent ) {
      documentPath = parent.getDocumentPath() + '/' + documentPath;
    }

    firestore.doc( documentPath ).update( props );
  }



  constructor( data, { parent = null } = {} ) {
    this.id = 0;
    this.parent = null;

    for ( let key in data ) {
      this[ key ] = data[ key ];
    }
    this.parent = parent;
  }

  delete() {
    this.constructor.deleteById( this.id, { parent: this.parent } );
  }

  getDocumentPath() {
    let result = this.constructor.getCollectionId() + '/' + this.id;
    if ( this.parent ) {
      result = this.parent.getDocumentPath() + '/' + result;
    }
    return result;
  }

  update( props ) {
    this.constructor.updateById( this.id, props, { parent: this.parent } );
  }




}