import React from 'react';
import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Chip,
    Button
} from '@mui/material';
import {
    History,
    Clear,
    TrendingUp,
    Search as SearchIcon
} from '@mui/icons-material';
import './SearchHistory.css';

const SearchHistory = ({ onSearch, onClearHistory }) => {
    // Sample search history data
    const searchHistory = [
        { id: 1, query: 'silk sarees', timestamp: '2024-03-15T10:30:00Z' },
        { id: 2, query: 'wedding collection', timestamp: '2024-03-14T15:45:00Z' },
        { id: 3, query: 'traditional jewelry', timestamp: '2024-03-13T09:20:00Z' }
    ];

    // Sample trending searches
    const trendingSearches = [
        'designer blouses',
        'bridal lehengas',
        'party wear sarees',
        'festive collection'
    ];

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
    };

    return (
        <div className="search-history">
            <Paper className="history-paper">
                <div className="section-header">
                    <div className="header-title">
                        <History />
                        <Typography variant="h6">Recent Searches</Typography>
                    </div>
                    <Button
                        size="small"
                        onClick={onClearHistory}
                    >
                        Clear All
                    </Button>
                </div>
                <List className="history-list">
                    {searchHistory.map((item) => (
                        <ListItem
                            key={item.id}
                            button
                            onClick={() => onSearch(item.query)}
                        >
                            <SearchIcon className="search-icon" />
                            <ListItemText
                                primary={item.query}
                                secondary={formatTimestamp(item.timestamp)}
                            />
                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    size="small"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        // Handle remove item
                                    }}
                                >
                                    <Clear />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Paper>

            <Paper className="trending-paper">
                <div className="section-header">
                    <div className="header-title">
                        <TrendingUp />
                        <Typography variant="h6">Trending Searches</Typography>
                    </div>
                </div>
                <div className="trending-chips">
                    {trendingSearches.map((query, index) => (
                        <Chip
                            key={index}
                            label={query}
                            onClick={() => onSearch(query)}
                            className="trending-chip"
                        />
                    ))}
                </div>
            </Paper>
        </div>
    );
};

export default SearchHistory;