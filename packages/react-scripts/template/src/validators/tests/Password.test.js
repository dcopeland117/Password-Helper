import React from 'react';
import result from '../Password-validator';

describe(
  'Tests all of the validation rules for the password validator in isolation',
  () => {
    it('tests the null password validation rule', () => {
      const password = '';
      expect(result(password)).toEqual(['The password cannot be null']);
    });

    it('tests the whitespace validation rule', () => {
      const password = 'aaG7 fgf';
      expect(result(password)).toEqual([
        'The password cannot contain whitespaces',
      ]);
    });

    it('tests the greater than 8 characters rule', () => {
      const password = 'aaG7dfgtr';
      expect(result(password)).toEqual([
        'The password cannot be greater than 8 characters in length',
      ]);
    });

    it('tests the less than 8 characters validation rule', () => {
      const password = 'aaG7dfg';
      expect(result(password)).toEqual([
        'The password cannot be less than 8 characters in length',
      ]);
    });

    it('tests the at least one number validation rule', () => {
      const password = 'aaGmddfg';
      expect(result(password)).toEqual([
        'The password must contain at least one number',
      ]);
    });

    it('tests the at least one uppercase validation rule', () => {
      const password = 'aag1ddfg';
      expect(result(password)).toEqual([
        'The password must contain at least one uppercase letter',
      ]);
    });
  }
);

describe(
  'Tests all of the validation rules for the password validator in groups',
  () => {
    it('tests four validation rules at once - greater than', () => {
      const password = 'agg fgfmk';
      expect(result(password)).toEqual([
        'The password cannot contain whitespaces',
        'The password cannot be greater than 8 characters in length',
        'The password must contain at least one number',
        'The password must contain at least one uppercase letter',
      ]);
    });

    it('tests four validation rules at once - less than', () => {
      const password = 'agg fg';
      expect(result(password)).toEqual([
        'The password cannot contain whitespaces',
        'The password cannot be less than 8 characters in length',
        'The password must contain at least one number',
        'The password must contain at least one uppercase letter',
      ]);
    });
  }
);
