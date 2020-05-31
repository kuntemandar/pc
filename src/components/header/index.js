import { h } from 'preact';
import { Link } from 'preact-router/match';
import TopAppBar from 'preact-material-components/TopAppBar';
import 'preact-material-components/TopAppBar/style.css';

const Header = () => (
	<TopAppBar className="topappbar">
	<TopAppBar.Row>
	  <TopAppBar.Section align-start>
		<TopAppBar.Title>
		  Classrooms
		</TopAppBar.Title>
	  </TopAppBar.Section>
	  <TopAppBar.Section align-end>
	  </TopAppBar.Section>
	</TopAppBar.Row>
  </TopAppBar>

	
);

export default Header;
