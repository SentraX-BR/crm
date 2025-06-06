import { DEV_SEED_COMPANY_IDS } from 'src/database/typeorm-seeds/workspace/companies';
import { DEV_SEED_WORKSPACE_MEMBER_IDS } from 'src/database/typeorm-seeds/workspace/workspace-members';
import { WorkspaceEntityManager } from 'src/engine/twenty-orm/entity-manager/workspace-entity-manager';

const tableName = 'person';

export const DEV_SEED_PERSON_IDS = {
  CHRISTOPH: '20202020-1c0e-494c-a1b6-85b1c6fefaa5',
  SYLVIE: '20202020-ac73-4797-824e-87a1f5aea9e0',
  CHRISTOPHER_G: '20202020-f517-42fd-80ae-14173b3b70ae',
  ASHLEY: '20202020-eee1-4690-ad2c-8619e5b56a2e',
  NICHOLAS: '20202020-6784-4449-afdf-dc62cb8702f2',
  ISABELLA: '20202020-490f-4466-8391-733cfd66a0c8',
  MATTHEW: '20202020-80f1-4dff-b570-a74942528de3',
  ELIZABETH: '20202020-338b-46df-8811-fa08c7d19d35',
  CHRISTOPHER_N: '20202020-64ad-4b0e-bbfd-e9fd795b7016',
  AVERY: '20202020-5d54-41b7-ba36-f0d20e1417ae',
  ETHAN: '20202020-623d-41fe-92e7-dd45b7c568e1',
  MADISON: '20202020-2d40-4e49-8df4-9c6a049190ef',
  BERTRAND: '20202020-2d40-4e49-8df4-9c6a049190df',
  LOUIS: '20202020-2d40-4e49-8df4-9c6a049191de',
  LORIE: '20202020-2d40-4e49-8df4-9c6a049191df',
};

export const seedPeople = async (
  entityManager: WorkspaceEntityManager,
  schemaName: string,
) => {
  await entityManager
    .createQueryBuilder(undefined, undefined, undefined, {
      shouldBypassPermissionChecks: true,
    })
    .insert()
    .into(`${schemaName}.${tableName}`, [
      'id',
      'nameFirstName',
      'nameLastName',
      'phonesPrimaryPhoneCountryCode',
      'phonesPrimaryPhoneCallingCode',
      'phonesPrimaryPhoneNumber',
      'city',
      'companyId',
      'emailsPrimaryEmail',
      'position',
      'whatsappPrimaryPhoneCountryCode',
      'whatsappPrimaryPhoneCallingCode',
      'whatsappPrimaryPhoneNumber',
      'createdBySource',
      'createdByWorkspaceMemberId',
      'createdByName',
    ])
    .orIgnore()
    .values([
      {
        id: DEV_SEED_PERSON_IDS.CHRISTOPH,
        nameFirstName: 'Christoph',
        nameLastName: 'Callisto',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '789012345',
        city: 'Seattle',
        companyId: DEV_SEED_COMPANY_IDS.LINKEDIN,
        emailsPrimaryEmail: 'christoph.calisto@linkedin.com',
        position: 1,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '789012345',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.SYLVIE,
        nameFirstName: 'Sylvie',
        nameLastName: 'Palmer',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '780123456',
        city: 'Los Angeles',
        companyId: DEV_SEED_COMPANY_IDS.LINKEDIN,
        emailsPrimaryEmail: 'sylvie.palmer@linkedin.com',
        position: 2,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '780123456',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.CHRISTOPHER_G,
        nameFirstName: 'Christopher',
        nameLastName: 'Gonzalez',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '789012345',
        city: 'San Francisco',
        companyId: DEV_SEED_COMPANY_IDS.ANTHROPIC,
        emailsPrimaryEmail: 'christopher.gonzalez@anthropic.com',
        position: 3,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '789012345',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.ASHLEY,
        nameFirstName: 'Ashley',
        nameLastName: 'Parker',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '780123456',
        city: 'Los Angeles',
        companyId: DEV_SEED_COMPANY_IDS.ANTHROPIC,
        emailsPrimaryEmail: 'ashley.parker@anthropic.com',
        position: 4,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '780123456',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.NICHOLAS,
        nameFirstName: 'Nicholas',
        nameLastName: 'Wright',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '781234567',
        city: 'Seattle',
        companyId: DEV_SEED_COMPANY_IDS.MICROSOFT,
        emailsPrimaryEmail: 'nicholas.wright@microsoft.com',
        position: 5,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '781234567',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.ISABELLA,
        nameFirstName: 'Isabella',
        nameLastName: 'Scott',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '782345678',
        city: 'New York',
        companyId: DEV_SEED_COMPANY_IDS.MICROSOFT,
        emailsPrimaryEmail: 'isabella.scott@microsoft.com',
        position: 6,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '782345678',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.MATTHEW,
        nameFirstName: 'Matthew',
        nameLastName: 'Green',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '783456789',
        city: 'Seattle',
        companyId: DEV_SEED_COMPANY_IDS.MICROSOFT,
        emailsPrimaryEmail: 'matthew.green@microsoft.com',
        position: 7,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '783456789',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.ELIZABETH,
        nameFirstName: 'Elizabeth',
        nameLastName: 'Baker',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '784567890',
        city: 'New York',
        companyId: DEV_SEED_COMPANY_IDS.AIRBNB,
        emailsPrimaryEmail: 'elizabeth.baker@airbnb.com',
        position: 8,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '784567890',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.CHRISTOPHER_N,
        nameFirstName: 'Christopher',
        nameLastName: 'Nelson',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '785678901',
        city: 'San Francisco',
        companyId: DEV_SEED_COMPANY_IDS.AIRBNB,
        emailsPrimaryEmail: 'christopher.nelson@airbnb.com',
        position: 9,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '785678901',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.AVERY,
        nameFirstName: 'Avery',
        nameLastName: 'Carter',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '786789012',
        city: 'New York',
        companyId: DEV_SEED_COMPANY_IDS.AIRBNB,
        emailsPrimaryEmail: 'avery.carter@airbnb.com',
        position: 10,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '786789012',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.ETHAN,
        nameFirstName: 'Ethan',
        nameLastName: 'Mitchell',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '787890123',
        city: 'Los Angeles',
        companyId: DEV_SEED_COMPANY_IDS.GOOGLE,
        emailsPrimaryEmail: 'ethan.mitchell@google.com',
        position: 11,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '787890123',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.MADISON,
        nameFirstName: 'Madison',
        nameLastName: 'Perez',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '788901234',
        city: 'Seattle',
        companyId: DEV_SEED_COMPANY_IDS.GOOGLE,
        emailsPrimaryEmail: 'madison.perez@google.com',
        position: 12,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '788901234',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.BERTRAND,
        nameFirstName: 'Bertrand',
        nameLastName: 'Voulzy',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '788901234',
        city: 'Seattle',
        companyId: DEV_SEED_COMPANY_IDS.GOOGLE,
        emailsPrimaryEmail: 'bertrand.voulzy@google.com',
        position: 13,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '788901234',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.LOUIS,
        nameFirstName: 'Louis',
        nameLastName: 'Duss',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '789012345',
        city: 'Seattle',
        companyId: DEV_SEED_COMPANY_IDS.GOOGLE,
        emailsPrimaryEmail: 'louis.duss@google.com',
        position: 14,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '789012345',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
      {
        id: DEV_SEED_PERSON_IDS.LORIE,
        nameFirstName: 'Lorie',
        nameLastName: 'Vladim',
        phonesPrimaryPhoneCountryCode: 'FR',
        phonesPrimaryPhoneCallingCode: '+33',
        phonesPrimaryPhoneNumber: '788901235',
        city: 'Seattle',
        companyId: DEV_SEED_COMPANY_IDS.GOOGLE,
        emailsPrimaryEmail: 'lorie.vladim@google.com',
        position: 15,
        whatsappPrimaryPhoneCountryCode: 'FR',
        whatsappPrimaryPhoneCallingCode: '+33',
        whatsappPrimaryPhoneNumber: '788901235',
        createdBySource: 'MANUAL',
        createdByWorkspaceMemberId: DEV_SEED_WORKSPACE_MEMBER_IDS.TIM,
        createdByName: 'Tim Apple',
      },
    ])
    .execute();
};
