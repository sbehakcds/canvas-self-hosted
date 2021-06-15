/*
 * Copyright (C) 2020 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react'
import I18n from 'i18n!OutcomeManagement'
import {Menu} from '@instructure/ui-menu'
import {View} from '@instructure/ui-view'
import {Button} from '@instructure/ui-buttons'
import {
  IconImportLine,
  IconOutcomesLine,
  IconPlusSolid,
  IconSearchLine
} from '@instructure/ui-icons'
import {showImportOutcomesModal} from '@canvas/outcomes/react/ImportOutcomesModal'
import FindOutcomesModal from './FindOutcomesModal'
import CreateOutcomeModal from './CreateOutcomeModal'
import useModal from '@canvas/outcomes/react/hooks/useModal'
import WithBreakpoints from 'with-breakpoints'

const ManagementHeader = ({breakpoints}) => {
  const [isFindOutcomeModalOpen, openFindOutcomeModal, closeFindOutcomeModal] = useModal()
  const [isCreateOutcomeModalOpen, openCreateOutcomeModal, closeCreateOutcomeModal] = useModal()
  const isDropdown = !breakpoints?.tablet

  return (
    <div className="management-header" data-testid="managementHeader">
      <View as="div">
        <h2 className="title">{I18n.t('Outcomes')}</h2>
      </View>
      <View as="div">
        {isDropdown ? (
          <Menu
            trigger={
              <Button renderIcon={IconOutcomesLine} margin="x-small">
                {I18n.t('Add')}
              </Button>
            }
          >
            <Menu.Item onSelect={showImportOutcomesModal}>
              <IconImportLine size="x-small" />
              <View padding="0 small">{I18n.t('Import')}</View>
            </Menu.Item>
            <Menu.Item onSelect={openCreateOutcomeModal}>
              <IconPlusSolid size="x-small" />
              <View padding="0 small">{I18n.t('Create')}</View>
            </Menu.Item>
            <Menu.Item onSelect={openFindOutcomeModal}>
              <IconSearchLine size="x-small" />
              <View padding="0 small">{I18n.t('Find')}</View>
            </Menu.Item>
          </Menu>
        ) : (
          <>
            <Button onClick={showImportOutcomesModal} renderIcon={IconImportLine} margin="x-small">
              {I18n.t('Import')}
            </Button>
            <Button onClick={openCreateOutcomeModal} renderIcon={IconPlusSolid} margin="x-small">
              {I18n.t('Create')}
            </Button>
            <Button onClick={openFindOutcomeModal} renderIcon={IconSearchLine} margin="x-small">
              {I18n.t('Find')}
            </Button>
          </>
        )}
      </View>
      <FindOutcomesModal open={isFindOutcomeModalOpen} onCloseHandler={closeFindOutcomeModal} />
      <CreateOutcomeModal
        isOpen={isCreateOutcomeModalOpen}
        onCloseHandler={closeCreateOutcomeModal}
      />
    </div>
  )
}

export default WithBreakpoints(ManagementHeader)
