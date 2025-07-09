'use client';

import React, { useState, ChangeEvent } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './LoginModal.module.scss';
import { useTranslations } from 'next-intl';
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';

interface LoginModalProps {
  show: boolean;
  onHide: () => void;
  onSwitchToRegister: () => void;
}

const LoginModal = ({ show, onHide, onSwitchToRegister }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const t = useTranslations('auth');

  const handleLogin = () => {
    console.log('Login attempt:', { email, password, rememberMe });
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop={true}
      dialogClassName={styles.modalDialog}
    >
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={onHide}
        >
          <FaTimes />
        </button>

        <h2 className={styles.modalHeader}>
          {t('loginTitle')}
        </h2>

        <p className={styles.modalSubtitle}>
          {t('loginSubtitle')}.
        </p>

        <Form>
          <Form.Group className={styles.formGroup}>
            <Form.Control
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder={t('emailPlaceholder')}
              className={styles.formInput}
            />
          </Form.Group>

          <Form.Group className={styles.formGroup} style={{ marginBottom: '1rem' }}>
            <div className={styles.passwordInputGroup}>
              <Form.Control
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder={t('passwordPlaceholder')}
                className={styles.formInput}
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={t(showPassword ? 'hidePassword' : 'showPassword')}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </Form.Group>

          <div className={styles.checkboxGroup}>
            <Form.Check
              type="checkbox"
              checked={rememberMe}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
              id="rememberMe"
              className={styles.formCheckInput}
            />
            <label htmlFor="rememberMe" className={styles.checkboxLabel}>
              {t('rememberMe')}
            </label>
          </div>

          <Button
            className={styles.loginButton}
            onClick={handleLogin}
          >
            {t('login')}
          </Button>

          <div className={styles.signupLink}>
            {t('noAccount')}{' '}
            <a href="#" onClick={(e) => {
              e.preventDefault();
              onSwitchToRegister();
            }}>
              {t('signupLink')}
            </a>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default LoginModal; 