import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import BarChart from './BarChart'
import GraphChart from './GraphChart'
import RoundChart from './RoundChart'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='dash1'>
                <div>
                <Card className='card-one'>
                    <CardContent className='content'>
                        <Typography className='recent-upload'>
                            Recent Upload 
                        </Typography>
                        <table>
                            <tr>
                                <td>Title</td>
                                <td>: Day at the Zoo</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>: A Kid spends his day at the zoo for the first time</td>
                            </tr>
                            <tr>
                                <td>Visibility</td>
                                <td>: Private</td>
                            </tr>
                            <tr>
                                <td>Likes</td>
                                <td>: 60</td>
                            </tr>
                            <tr>
                                <td>Dislikes</td>
                                <td>: 10</td>
                            </tr>
                            <tr>
                                <td>Comments</td>
                                <td>: 30</td>
                            </tr>
                            <tr>
                                <td>Views</td>
                                <td>: 250</td>
                            </tr>
                            <tr>
                                <td>Pulished on</td>
                                <td>: 2 November 2020</td>
                            </tr>
                        </table>
                    </CardContent>
                </Card>
                </div>
                
                <div className='cards'>
                    <div><Card className='root'>
                        <CardContent className='content'>
                            <Typography className='title'>
                                Total Views
                            </Typography>
                            <Typography className='number'>3560</Typography>
                        </CardContent> 
                    </Card>
                    </div>
                    
                    <div><Card className='root'>
                        <CardContent className='content'>
                            <Typography className='title'>
                                Total comments
                            </Typography>
                            <Typography className='number'>680</Typography>
                        </CardContent>
                    </Card>
                    </div>
                    
                    <div><Card className='root'>
                        <CardContent className='content'>
                            <Typography className='title'>
                                Total likes and dislikes
                            </Typography>
                            <div className='likes-and-dislikes'>
                                <div><Typography className='likes'>780</Typography></div>
                                <div><Typography className='dash'>/</Typography></div>
                                <div><Typography className='dislikes'>156</Typography></div>
                            </div>
                        </CardContent>
                    </Card>
                    </div>
                </div>
                
                <div className='barchart'>
                <Card>
                    <CardContent className='content'>
                        <Typography className='graph-title'>Upload rate</Typography>
                        <BarChart/>
                    </CardContent>
                </Card>
                </div>
            </div>
            
            <div className='dash2'>
                <div>
                <Card>
                    <CardContent className='content'>
                        <Typography className='graph-title'>Post interaction performance</Typography>
                        <GraphChart/>
                    </CardContent>
                </Card>
                </div>
                
                <div>
                <Card>
                    <CardContent className='content'>
                        <Typography className='graph-title'>Visibility</Typography>
                        <RoundChart/>
                    </CardContent> 
                </Card>
                </div>
            </div>
       
        </div>
    )
}

export default Dashboard
