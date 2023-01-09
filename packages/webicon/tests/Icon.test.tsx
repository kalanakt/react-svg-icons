import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'

import {
  HomeIcon,
  BookmarkIcon,
  CategoryIcon,
  ChatIcon,
  CloseIcon,
  BrowserIcon,
  CheckIcon,
  CloudIcon,
  DatabaseIcon,
  DocumentIcon,
  DownIcon,
  DownloadIcon,
  CodeIcon,
  GarbageIcon,
  ForbiddenIcon,
  GearIcon,
  GridIcon,
  MenuIcon,
  HeartIcon,
  HourglassIcon,
  ImageIcon,
  IdeaIcon,
  LeftIcon,
  LikeIcon,
  LinkIcon,
  ListIcon,
  LocationIcon,
  MapIcon,
  MusicIcon,
  MicrophoneIcon,
  MegaphoneIcon,
  MonitorIcon,
  MobileIcon,
  SitemapIcon,
  SearchIcon,
  RssIcon,
  RightIcon,
  PowerIcon,
  ProcessIcon,
  PinIcon,
  PhotoIcon,
  PaperIcon,
  PerformanceIcon,
  StarIcon,
  StatsIcon,
  TagIcon,
  UserIcon,
  UpIcon,
} from '../src'

function IconList() {
  return (
    <div>
      <HomeIcon />
      <BookmarkIcon />
      <CategoryIcon />
      <ChatIcon />
      <CloseIcon />
      <BrowserIcon />
      <CheckIcon />
      <CloudIcon />
      <DatabaseIcon />
      <DocumentIcon />
      <DownIcon />
      <DownloadIcon />
      <CodeIcon />
      <GarbageIcon />
      <ForbiddenIcon />
      <GearIcon />
      <GridIcon />
      <MenuIcon />
      <HeartIcon />
      <HourglassIcon />
      <ImageIcon />
      <IdeaIcon />
      <LeftIcon />
      <LikeIcon />
      <LinkIcon />
      <ListIcon />
      <LocationIcon />
      <MapIcon />
      <MusicIcon />
      <MicrophoneIcon />
      <MegaphoneIcon />
      <MonitorIcon />
      <MobileIcon />
      <SitemapIcon />
      <SearchIcon />
      <RssIcon />
      <RightIcon />
      <PowerIcon />
      <ProcessIcon />
      <PinIcon />
      <PhotoIcon />
      <PaperIcon />
      <PerformanceIcon />
      <StarIcon />
      <StatsIcon />
      <TagIcon />
      <UserIcon />
      <UpIcon />
    </div>
  )
}

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<IconList />)
  })
})
