import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    user,
}) => (
    <form action="/" onSubmit={onSubmit}>
    {errors.summary && <p className="error-message">{errors.summary}</p>}

            <input type="text" name="username" errorText={errors.username} onChange={onChange} value={user.username} placeholder="Username"/><br />
            <input type="password" name="password" errorText={errors.password} onChange={onChange} value={user.password} placeholder="Password"/><br />
            <button type="submit">Create new account</button>

            <p>Already have an account? <Link tp={'/login'}>Login now</Link></p>
    </form>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;