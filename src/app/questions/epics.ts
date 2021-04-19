import {Epic} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import {
  QuestionsActionTypes,
  GetQuestionsAction,
  GetQuestionsSuccessAction,
  AddQuestionAction,
  AddQuestionSuccessAction,
  AddCommentAction,
  AddCommentSuccessAction,
  GetTopQuestionsAction,
  SetLikeAction,
  SetLikeSuccessAction,
  GetCommentsAction,
} from './actionTypes';
import {
  getQuestionsSuccess,
  getQuestionsFail,
  addQuestionSuccess,
  addQuestionFail,
  getQuestions,
  addCommentSuccess,
  selectQuestion,
  getTopQuestionsSuccess,
  getTopQuestionsFail,
  setLikeSuccess,
  setLikeFail,
  getCommentsSuccess,
  getCommentsFail,
  getComments,
} from './actions';
import questionsApi from '../../api/questions';
// import NavigationService from '../../navigation/NavigationService'
// import { AppScreens } from '../../navigation/routes'
import {noop} from 'rxjs';
import {ready} from '../app/actions';
import {getUser} from '../user/actions';

export const getQuestionsEpic: Epic = action$ => {
  return action$.ofType(QuestionsActionTypes.GET_QUESTIONS).pipe(
    mergeMap(async (action: GetQuestionsAction) => {
      try {
        const response = await questionsApi.getQuestionsByCategory(
          action.payload.category_id,
        );

        return getQuestionsSuccess(
          response.data.data,
          action.payload.updateSelectedQuestion,
          action.payload.post_id,
        );
      } catch (e) {
        return getQuestionsFail(e.response.data.message);
      }
    }),
  );
};

export const getQuestionsSuccessEpic: Epic = action$ => {
  return action$.ofType(QuestionsActionTypes.GET_QUESTIONS_SUCCESS).pipe(
    mergeMap(async (action: GetQuestionsSuccessAction) => {
      const {updateSelectedQuestion, list, post_id} = action.payload;

      if (updateSelectedQuestion && post_id) {
        const question = list.find(item => item._id === post_id);
        return question ? selectQuestion(question) : ready();
      } else {
        return ready();
      }
    }),
  );
};

export const addQuestionEpic: Epic = action$ => {
  return action$.ofType(QuestionsActionTypes.ADD_QUESTION).pipe(
    mergeMap(async (action: AddQuestionAction) => {
      try {
        const {title, content, category_id} = action.payload;
        const response = await questionsApi.addQuestion(
          title,
          content,
          category_id,
        );
        return addQuestionSuccess(response.data.message, category_id);
      } catch (e) {
        return addQuestionFail(e.response.data.message);
      }
    }),
  );
};

export const addQuestionSuccessEpic: Epic = action$ => {
  return action$.ofType(QuestionsActionTypes.ADD_QUESTION_SUCCESS).pipe(
    mergeMap(async (action: AddQuestionSuccessAction) => {
      // NavigationService.navigate(AppScreens.CATEGORY_QUESTIONS)
      return getQuestions(action.payload.category_id);
    }),
  );
};

export const addCommentEpic: Epic = action$ => {
  return action$.ofType(QuestionsActionTypes.ADD_COMMENT).pipe(
    mergeMap(async (action: AddCommentAction) => {
      try {
        const {text, accessToken, category_id, post_id} = action.payload;
        const response = await questionsApi.addComment(
          text,
          accessToken,
          post_id,
        );
        return addCommentSuccess(response.data.message, category_id, post_id);
      } catch (e) {
        return addQuestionFail(e.response.data.message);
      }
    }),
  );
};

export const addCommentSuccessEpic: Epic = action$ => {
  return action$.ofType(QuestionsActionTypes.ADD_COMMENT_SUCCESS).pipe(
    mergeMap(async (action: AddCommentSuccessAction) => {
      // return getQuestions(action.payload.category_id, true, action.payload.post_id)
      return getComments(action.payload.post_id);
    }),
  );
};

export const getTopQuestionsEpic: Epic = action$ => {
  return action$.ofType(QuestionsActionTypes.GET_TOP_QUESTIONS).pipe(
    mergeMap(async (action: GetTopQuestionsAction) => {
      try {
        const response = await questionsApi.getTopQuestions();

        return getTopQuestionsSuccess(
          response.data.data,
          action.payload.updateSelectedQuestion,
          action.payload.post_id,
        );
      } catch (e) {
        return getTopQuestionsFail(e.response.data.message);
      }
    }),
  );
};

export const setLikeEpic: Epic = action$ => {
  return action$.ofType(QuestionsActionTypes.SET_LIKE).pipe(
    mergeMap(async (action: SetLikeAction) => {
      try {
        const {category_id, post_id, accessToken} = action.payload;
        await questionsApi.setLikeToQuestions(post_id, accessToken);

        return setLikeSuccess(category_id, post_id, accessToken);
      } catch (e) {
        return setLikeFail(e.response.data.message);
      }
    }),
  );
};

export const setLikeSuccessEpic: Epic = action$ => {
  return action$.ofType(QuestionsActionTypes.SET_LIKE_SUCCESS).pipe(
    mergeMap(async (action: SetLikeSuccessAction) => {
      return getQuestions(
        action.payload.category_id,
        true,
        action.payload.post_id,
      );
    }),
  );
};

export const updateUserAfterSetLikeSuccessEpic: Epic = action$ => {
  return action$.ofType(QuestionsActionTypes.SET_LIKE_SUCCESS).pipe(
    mergeMap(async (action: SetLikeSuccessAction) => {
      return getUser(action.payload.accessToken);
    }),
  );
};

export const getCommentsEpic: Epic = action$ => {
  return action$.ofType(QuestionsActionTypes.GET_COMMENTS).pipe(
    mergeMap(async (action: GetCommentsAction) => {
      try {
        const {post_id} = action.payload;
        const response = await questionsApi.getComments(post_id);

        return getCommentsSuccess(response.data.data);
      } catch (e) {
        return getCommentsFail(e.response.data.message);
      }
    }),
  );
};

export default [
  getQuestionsEpic,
  getQuestionsSuccessEpic,
  addQuestionEpic,
  addQuestionSuccessEpic,
  addCommentEpic,
  addCommentSuccessEpic,
  getTopQuestionsEpic,
  setLikeEpic,
  setLikeSuccessEpic,
  updateUserAfterSetLikeSuccessEpic,
  getCommentsEpic,
];
