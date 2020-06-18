import { map, startWith } from 'rxjs/operators';
import Model from 'src/models/Model';
import Question from 'src/models/Question';

export default class Quiz extends Model {
  static all( { parent = null, order = '' } = {} ) {
    let result = super.all( { parent: parent, order: order } );

    if ( order === 'name' ) {
      result = result.pipe(
        map( items => items.sort( ( a, b ) => a.name.localeCompare( b.name, 'en', { sensitivity: 'base' } ) ) )
      );
    }

    return result;
  }


  static getCollectionId() {
    return 'quizzes';
  }

  addQuestion( props ) {
    Question.add( props, { parent: this } );
  }

  findQuestion( id ) {
    return Question.find( id, { parent: this } );
  }

  questions( options = {} ) {
    return Question.all( { order: 'questionIndex', ...options, parent: this } );
  }


}