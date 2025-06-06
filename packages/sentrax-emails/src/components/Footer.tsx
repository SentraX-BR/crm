import { i18n } from '@lingui/core';
import { Column, Container, Row } from '@react-email/components';
import { Link } from 'src/components/Link';
import { ShadowText } from 'src/components/ShadowText';

const footerContainerStyle = {
  marginTop: '12px',
};

export const Footer = () => {
  return (
    <Container style={footerContainerStyle}>
      <Row>
        <Column>
          <ShadowText>
            <Link
              href="https://sentrax.com.br/"
              value={i18n._('Website')}
              aria-label={i18n._("Visite SentraX's website")}
            />
          </ShadowText>
        </Column>
        <Column>
          <ShadowText>
            <Link
              href="https://sentrax.com.br/crm"
              value={i18n._('Github')}
              aria-label={i18n._("Visit SentraX's GitHub repository")}
            />
          </ShadowText>
        </Column>
        <Column>
          <ShadowText>
            <Link
              href="https://sentrax.com.br/crm/guia-do-usuario"
              value={i18n._('User guide')}
              aria-label={i18n._("Read SentraX's user guide")}
            />
          </ShadowText>
        </Column>
        <Column>
          <ShadowText>
            <Link
              href="https://docs.sentrax.com.br/crm"
              value={i18n._('Developers')}
              aria-label={i18n._("Visit SentraX's developer documentation")}
            />
          </ShadowText>
        </Column>
      </Row>
      <ShadowText>
        <>
          {i18n._('SentraX.com.br')}
          <br />
          {i18n._('São Paulo / Brazil')}
        </>
      </ShadowText>
    </Container>
  );
};
